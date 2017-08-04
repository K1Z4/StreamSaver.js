'use strict';

let downloads = {};

this.addEventListener('fetch', (event) => {
	const url = event.request.url;

    const downloadData = downloads[url];
	if (!downloadData) return null;

    const filename = encodeRFC5987(downloadData.fileInfo.name);
	const headers = {
		'Content-Disposition': "attachment; filename*=UTF-8''" + filename
	}
	
	if (downloadData.fileInfo.contentType) headers['Content-Type'] = downloadData.fileInfo.contentType;
	if (downloadData.fileInfo.size) headers['Content-Length'] = downloadData.fileInfo.size;

	event.respondWith(new Response(downloadData.stream, { headers }));

	// delete the downloads variable as we only support 1 stream = 1 download
	delete downloads[url];
});

self.onmessage = event => {
	if (!event.ports[0] || !event.ports[0] instanceof MessagePort) 
		return console.error("Worker recieved message without MessagePort provided");
		
	const messagePort = event.ports[0];
	const fileInfo = JSON.parse(event.data);
	const downloadUrl = generateDownloadUrl(fileInfo.name);
	const stream = new ReadableStream({
		start(controller) {
			messagePort.onmessage = ({data}) => {
				if (data instanceof ArrayBuffer) {
					const unitArray = new Uint8Array(data);
					controller.enqueue(unitArray);
					messagePort.postMessage("chunk added");
				} else if (data instanceof Uint8Array) {
					controller.enqueue(data);
					messagePort.postMessage("chunk added");
				} else if (data == "close") {
					controller.close();
				} else if (data == "abort") {
					controller.abort();
				}
			};
		},
		cancel() {
			console.log("aborted")
		}
	});

	downloads[downloadUrl] = {
		downloadUrl,
		fileInfo,
		messagePort,
		stream
	};

	messagePort.postMessage(downloadUrl);
}

function generateDownloadUrl(fileName) {
	return encodeURI(self.registration.scope + "/" + fileName);
}

function encodeRFC5987(str) {
    return encodeURIComponent(str)
        .replace(/['()]/g, match => '%' + match.charCodeAt(0).toString(16))
		.replace(/\*/g, '%2A')
}
