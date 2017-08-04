((name, definition) => {
	'undefined' != typeof module ? module.exports = definition() :
	'function' == typeof define && 'object' == typeof define.amd ? define(definition) :
	this[name] = definition()
})('StreamSaver', () => {
    "use strict";

    return class StreamSaver {
        constructor({ scope = "./StreamSaverDownloads", serviceWorkerPath = "StreamSaverServiceWorker.js" } = {}) {
            if (location.protocol !== 'https:' && location.hostname !== 'localhost') 
                throw Error("StreamSaver.js needs to be served via HTTPS or on localhost");

            // Initialise service worker
            this._serviceWorker;
            this._onServiceWorkerPromises = [];

            navigator.serviceWorker.getRegistration(scope).then(reg => {
                return reg || navigator.serviceWorker.register(serviceWorkerPath, {scope});
            }).then(swReg => {
                const worker = swReg.installing || swReg.waiting || swReg.active;

                this._serviceWorker = worker;
                this._onServiceWorkerPromises.forEach(promis => promis.resolve(worker));
                this._onServiceWorkerPromises = [];
            }).catch(err => {
                this._onServiceWorkerPromises.forEach(promis => promis.reject(err));
                this._onServiceWorkerPromises = [];
                throw err;
            });
        }

        static get supported() {
            try {
                return 'serviceWorker' in navigator && !!new ReadableStream() && !!new WritableStream();
            } catch(err) {
                return false;
            }
        }

        getServiceWorker() {
            return new Promise((resolve, reject) => {
                if (this._serviceWorker)
                    return resolve(this._serviceWorker);
                return this._onServiceWorkerPromises.push({ resolve: resolve, reject: reject });
            });
        }

        createStream(fileOptions, queuingStrategy) {
            // TODO: Add overload?

            const channel = new MessageChannel;
            const self = this;
            return new WritableStream({
                start(error) {
                    // is called immediately, and should perform any actions necessary to acquire access to the underlying sink.
                    // If this process is asynchronous, it can return a promise to signal success or failure.
                    return self.getServiceWorker().then(worker => {
                        return new Promise((resolve, reject) => {
                            channel.port1.onmessage = evt => {
                                if (!evt.data) return reject("Service worker did not provide download url");

                                // If we add a download attribute to the link the download fails on Chrome. Not sure why.
                                const link = document.createElement('a');
                                link.href = evt.data;
                                link.dispatchEvent(new MouseEvent('click'));

                                return resolve();
                            }

                            // Stringify the data before sending for slightly improved performance
                            worker.postMessage(JSON.stringify(fileOptions), [channel.port2]);
                        });
                    });
                },
                write(chunk) {
                    // Await an answer so that we can handle backpressure
                    return new Promise((resolve, reject) => {
                        channel.port1.postMessage(chunk);
                        channel.port1.onmessage = resolve;
                    });
                },
                close() {
                    channel.port1.postMessage("close");
                },
                abort() {
                    channel.port1.postMessage("abort");
                }
            }, queuingStrategy);
        }
    }
});
