"use strict";
class StreamSaver {
    constructor(mitmUrl) {
        if (location.protocol !== 'https:' && location.hostname !== 'localhost') return console.error("StreamSaver.js requires HTTPS");

        this.supported = false;
        this.mitm = mitmUrl;

       	try {
            // Some browsers have streams but doesn't support constructing yet
            this.supported = 'serviceWorker' in navigator && !!new ReadableStream() && !!new WritableStream()
        } catch(err) {}
        
        if (!this.supported) return console.log("Browser does not support required classes, exiting initialisation");

        this.iframe = document.createElement('iframe');
        this.iframe.src = this.mitm;
		this.iframe.hidden = true;
        document.body.appendChild(this.iframe);
    }

    createWriteStream(filename, queuingStrategy, size) {
		// normalize arguments
		if (Number.isFinite(queuingStrategy))
			[size, queuingStrategy] = [queuingStrategy, size]

        const channel = new MessageChannel;
        
		const setupChannel = () => new Promise((resolve, reject) => {
			channel.port1.onmessage = evt => {
				if(evt.data.download) {
					resolve()
                    const link = document.createElement('a');
					link.href = evt.data.download;
					link.dispatchEvent(new MouseEvent('click'));
				}
			}

			if (this.iframe.readyState  !== 'complete') {
				const fn = () => {
                    this.iframe.removeEventListener('load', fn);
                    this.iframe.contentWindow.postMessage({filename, size}, '*', [channel.port2])
                }
                
                this.iframe.addEventListener('load', fn);
			} else {
				this.iframe.contentWindow.postMessage({filename, size}, '*', [channel.port2])

            }
		});

		return new WritableStream({
			start(error) {
				// is called immediately, and should perform any actions
				// necessary to acquire access to the underlying sink.
				// If this process is asynchronous, it can return a promise
				// to signal success or failure.
				return setupChannel()
			},
			write(chunk) {
				// is called when a new chunk of data is ready to be written
				// to the underlying sink. It can return a promise to signal
				// success or failure of the write operation. The stream
				// implementation guarantees that this method will be called
				// only after previous writes have succeeded, and never after
				// close or abort is called.

				// TODO: Kind of important that service worker respond back when
				// it has been written. Otherwise we can't handle backpressure
				channel.port1.postMessage(chunk)
			},
			close() {
				channel.port1.postMessage('end')
				console.log('All data successfully read!')
			},
			abort(e) {
				channel.port1.postMessage('abort')
			}
		}, queuingStrategy)
	}
}