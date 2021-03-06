StreamSaver.js
==============
StreamSaver allows you to stream files directly to the filesystem. This allows you to save large files which you normally would not be able to due to max Blob size, RAM or browser restrictions.

Differences from Jimmy Wärting's StreamSaver
==============
[Jimmy Wärting][1]'s original version of StreamSaver supports streaming files on non-secure webpages, this means there is quite a lot of additional complexity to enable that to happen.
This fork of StreamSaver drops support for non-secure webpages and streamlines the library.
The result is a library which does not require the use of iframes or popups.

How does it work
==================
A [service worker][3] is created which handles requests to the configured scope e.g. /downloads.
We then fulfill the request with a [ReadableStream][2].

Examples
==================
Check out the examples folder for a working example.
```javascript
//Check support
const supported = StreamSaver.supported;

// All params optional
const streamSaver = new StreamSaver({ scope: "src/downloads", serviceWorkerPath: "src/StreamSaverServiceWorker.js" });
const stream = streamSaver.createStream({ name: "helloWorld.txt", size: 100, contentType: "application/text"  });
const writer = stream.getWriter();

writer.write(uint8array);
// or
writer.write(arrayBuffer);
writer.close();

```

Browser Support
==================

| Browser    | Supported | Missing                 |
| ---------- | --------- | ----------------------- |
| Opera 39+  | Yes       |                         |
| Chrome 52+ | Yes       |                         |
| Firefox    | No        | [Streams][4]            |
| Safari     | No        | Service Worker          |
| Edge       | No        | [Streams][5], Service Worker |
| IE         | No        | Everything (IE is dead) |

[1]: https://github.com/jimmywarting
[2]: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
[3]: https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API
[4]: https://platform-status.mozilla.org/#streams
[5]: https://developer.microsoft.com/en-us/microsoft-edge/platform/status/streamsapi/
