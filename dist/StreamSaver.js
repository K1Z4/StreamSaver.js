function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),_this=this,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,r){"undefined"!=typeof module?module.exports=r():"function"==typeof define&&"object"==_typeof(define.amd)?define(r):_this.StreamSaver=r()}(0,function(){"use strict";return function(){function e(){var r=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.scope,n=void 0===o?"./StreamSaverDownloads":o,i=t.serviceWorkerPath,s=void 0===i?"StreamSaverServiceWorker.js":i;if(_classCallCheck(this,e),"https:"!==location.protocol&&"localhost"!==location.hostname)throw Error("StreamSaver.js needs to be served via HTTPS or on localhost");this._serviceWorker,this._onServiceWorkerPromises=[],navigator.serviceWorker.getRegistration(n).then(function(e){return e||navigator.serviceWorker.register(s,{scope:n})}).then(function(e){var t=e.installing||e.waiting||e.active;r._serviceWorker=t,r._onServiceWorkerPromises.forEach(function(e){return e.resolve(t)}),r._onServiceWorkerPromises=[]}).catch(function(e){throw r._onServiceWorkerPromises.forEach(function(r){return r.reject(e)}),r._onServiceWorkerPromises=[],e})}return _createClass(e,[{key:"getServiceWorker",value:function(){var e=this;return new Promise(function(r,t){return e._serviceWorker?r(e._serviceWorker):e._onServiceWorkerPromises.push({resolve:r,reject:t})})}},{key:"createStream",value:function(e,r){var t=new MessageChannel,o=this;return new WritableStream({start:function(r){return o.getServiceWorker().then(function(r){return new Promise(function(o,n){t.port1.onmessage=function(e){if(!e.data)return n("Service worker did not provide download url");var r=document.createElement("a");return r.href=e.data,r.dispatchEvent(new MouseEvent("click")),o()},r.postMessage(JSON.stringify(e),[t.port2])})})},write:function(e){return new Promise(function(r,o){t.port1.postMessage(e),t.port1.onmessage=r})},close:function(){t.port1.postMessage("close")},abort:function(){t.port1.postMessage("abort")}},r)}}],[{key:"supported",get:function(){try{return"serviceWorker"in navigator&&!!new ReadableStream&&!!new WritableStream}catch(e){return!1}}}]),e}()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0cmVhbVNhdmVyLmpzIl0sIm5hbWVzIjpbIm5hbWUiLCJkZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmluZSIsIl90eXBlb2YiLCJhbWQiLCJfdGhpcyIsIlN0cmVhbVNhdmVyIiwiX3RoaXMyIiwidGhpcyIsIl9yZWYiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfcmVmJHNjb3BlIiwiX3JlZiRzZXJ2aWNlV29ya2VyUGF0Iiwic2VydmljZVdvcmtlclBhdGgiLCJfY2xhc3NDYWxsQ2hlY2siLCJsb2NhdGlvbiIsInByb3RvY29sIiwiRXJyb3IiLCJfc2VydmljZVdvcmtlciIsIl9vblNlcnZpY2VXb3JrZXJQcm9taXNlcyIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJnZXRSZWdpc3RyYXRpb24iLCJzY29wZSIsInRoZW4iLCJyZWciLCJyZWdpc3RlciIsInN3UmVnIiwid29ya2VyIiwiaW5zdGFsbGluZyIsIndhaXRpbmciLCJhY3RpdmUiLCJmb3JFYWNoIiwicHJvbWlzIiwicmVzb2x2ZSIsImNhdGNoIiwiZXJyIiwiaG9zdG5hbWUiLCJyZWplY3QiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMyIsInB1c2giLCJmaWxlT3B0aW9ucyIsInF1ZXVpbmdTdHJhdGVneSIsImNoYW5uZWwiLCJNZXNzYWdlQ2hhbm5lbCIsInNlbGYiLCJXcml0YWJsZVN0cmVhbSIsInN0YXJ0IiwiZXJyb3IiLCJwb3J0MSIsIm9ubWVzc2FnZSIsImV2dCIsImRhdGEiLCJsaW5rIiwiaHJlZiIsImRpc3BhdGNoRXZlbnQiLCJNb3VzZUV2ZW50IiwicG9zdE1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwicG9ydDIiLCJ3cml0ZSIsImNodW5rIiwiUHJvbWlzZSIsImRvY3VtZW50IiwiY2xvc2UiLCJhYm9ydCIsImdldCIsIlJlYWRhYmxlU3RyZWFtIl0sIm1hcHBpbmdzIjoiOGtCQUFBLFNBQUVBLEVBQU1DLEdBQ1Asb0JBQXNCQyxPQUFTQSxPQUFPQyxRQUFVRixJQUNoRCxtQkFBcUJHLFFBQVUsVUFBQUMsUUFBbUJELE9BQU9FLEtBQU1GLE9BQU9ILEdBQ3RFTSxNQUFBLFlBQWFOLElBSGQsQ0FJRyxFQUFlLFdBQ2QsYUFFQSxPQUFBLFdBUEgsU0FBQU8sSUFBc0IsSUFBQUMsRUFBQUMsS0FBQUMsRUFBQUMsVUFBQUMsT0FBQSxRQUFBQyxJQUFBRixVQUFBLEdBQUFBLFVBQUEsTUFBQUcsRUFBQUosRUFBZlYsTUFBQUEsT0FBZWEsSUFBQUMsRUFBQSx5QkFBQUEsRUFBQUMsRUFBQUwsRUFBQU0sa0JBQUFBLE9BQUFILElBQUFFLEVBQUEsOEJBQUFBLEVBQ3RCLEdBRHNCRSxnQkFBQVIsS0FBQUYsR0FDU04sV0FBL0JpQixTQUFlQyxVQUNmLGNBRCtCRCxTQUFpQmxCLFNBRGpELE1BSWtCb0IsTUFBQSwrREFHZFgsS0FBQVksZUFDSVosS0FBQWEsNEJBUUlDLFVBQVVDLGNBQWNDLGdCQUFnQkMsR0FBT0MsS0FBSyxTQUFBQyxHQVJrRCxPQUFBQSxHQUFBTCxVQUFBQyxjQUFBSyxTQUFBYixHQUFBVSxNQUFBQSxNQUFBQyxLQUFBLFNBQUFHLEdBQTVGSixJQUE0RkssRUFBQUQsRUFBQUUsWUFBcEZGLEVBQUFHLFNBQUFILEVBQUFJLE9BQTBCbEIsRUFBQUEsZUFBMERlLEVBY2xHdkIsRUFBS2MseUJBQXlCYSxRQUFRLFNBQUFDLEdBQUEsT0FBVUEsRUFBT0MsUUFBUU4sS0FkbUN2QixFQUFBYyw4QkFnQm5HZ0IsTUFBTSxTQUFBQyxHQVpULE1BSElyQixFQUFBQSx5QkFBQWlCLFFBQWtDakIsU0FBQUEsR0FBQUEsT0FBU3NCLEVBQVRDLE9BQXNCRixLQWlCeEQvQixFQUFLYyw0QkFkVGlCLElBTFIsT0FBQUcsYUFBQW5DLElBQUFvQyxJQUFBLG1CQUFBQyxNQUFBLFdBZVksSUFBQUMsRUFBQXBDLEtBQ0EsT0FBQSxJQUFLYSxRQUFBQSxTQUFBQSxFQUFBQSxHQUNOZ0IsT0FSSE8sRUFRU3hCLGVBQ0FDLEVBQUFBLEVBQUFBLGdCQUFpQ3VCLEVBQVVULHlCQUFWVSxNQUFBVCxRQUFBQSxFQUFBSSxPQUFBQSxTQWxCbERFLElBQUEsZUFBQUMsTUFBQSxTQVNRRyxFQUFBQyxHQVRSLElBQUFDLEVBQUEsSUFBQUMsZUFBQUMsRUFBQTFDLEtBQUEsT0FBQSxJQUFBMkMsZ0JBZ0N1QkMsTUFoQ3ZCLFNBZ0N1QkMsR0FFWCxPQUFJSCxFQUFLOUIsbUJBQ0xNLEtBQU9VLFNBQUFBLEdBQ1gsT0FBTyxJQUFLZixRQUFBQSxTQUFBQSxFQUFBQSxHQUhoQjJCLEVBQUFNLE1BQUFDLFVBQUEsU0FBQUMsR0FLSCxJQUFBQSxFQUFBQyxLQUFBLE9BQUFqQixFQUFBLCtDQXRDTCxJQUFBa0IsRUF3Q2lCWixTQUFhQyxjQUFBQSxLQUl0QixPQUhBVyxFQUFBQyxLQUFBSCxFQUFBQyxLQWdCb0JDLEVBQUtFLGNBQWMsSUFBSUMsV0FBVyxVQWJ0RHpCLEtBSVFOLEVBQUFnQyxZQUFBQyxLQUFBQyxVQUFBbEIsSUFBQUUsRUFBQWlCLGFBSVlDLE1BcEQ1QixTQW9ENEJDLEdBRUEsT0FBQSxJQUFBQyxRQUFBLFNBQUFoQyxFQUFBSSxHQUNBUSxFQUFBTSxNQUFBUSxZQUFhTyxHQUNiWCxFQUFBQSxNQUFBQSxVQUFZRixLQUdaYyxNQTNENUIsV0E0RHlCdEIsRUFBQU0sTUFURFEsWUFBQSxVQVdBUyxNQTlEeEIsV0ErRHdCekMsRUFBQUEsTUFBQUEsWUFBT2dDLFdBRWRmLFFBakVqQkwsSUFBQSxZQUFBOEIsSUFBQSxXQVVZLElBQ0Q5QyxNQUFLLGtCQUFTSixhQUFBLElBQUFtRCxrQkFBQSxJQUFBdEIsZUFDYixNQUFNckIsR0FnQk4sT0FBTyxPQTVCbkJ4QixFQUFBIiwiZmlsZSI6IlN0cmVhbVNhdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKChuYW1lLCBkZWZpbml0aW9uKSA9PiB7XG5cdCd1bmRlZmluZWQnICE9IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKSA6XG5cdCdmdW5jdGlvbicgPT0gdHlwZW9mIGRlZmluZSAmJiAnb2JqZWN0JyA9PSB0eXBlb2YgZGVmaW5lLmFtZCA/IGRlZmluZShkZWZpbml0aW9uKSA6XG5cdHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCdTdHJlYW1TYXZlcicsICgpID0+IHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHJldHVybiBjbGFzcyBTdHJlYW1TYXZlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHsgc2NvcGUgPSBcIi4vU3RyZWFtU2F2ZXJEb3dubG9hZHNcIiwgc2VydmljZVdvcmtlclBhdGggPSBcIlN0cmVhbVNhdmVyU2VydmljZVdvcmtlci5qc1wiIH0gPSB7fSkge1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnByb3RvY29sICE9PSAnaHR0cHM6JyAmJiBsb2NhdGlvbi5ob3N0bmFtZSAhPT0gJ2xvY2FsaG9zdCcpIFxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiU3RyZWFtU2F2ZXIuanMgbmVlZHMgdG8gYmUgc2VydmVkIHZpYSBIVFRQUyBvciBvbiBsb2NhbGhvc3RcIik7XG5cbiAgICAgICAgICAgIC8vIEluaXRpYWxpc2Ugc2VydmljZSB3b3JrZXJcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2VXb3JrZXI7XG4gICAgICAgICAgICB0aGlzLl9vblNlcnZpY2VXb3JrZXJQcm9taXNlcyA9IFtdO1xuXG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oc2NvcGUpLnRoZW4ocmVnID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVnIHx8IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKHNlcnZpY2VXb3JrZXJQYXRoLCB7c2NvcGV9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oc3dSZWcgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtlciA9IHN3UmVnLmluc3RhbGxpbmcgfHwgc3dSZWcud2FpdGluZyB8fCBzd1JlZy5hY3RpdmU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlV29ya2VyID0gd29ya2VyO1xuICAgICAgICAgICAgICAgIHRoaXMuX29uU2VydmljZVdvcmtlclByb21pc2VzLmZvckVhY2gocHJvbWlzID0+IHByb21pcy5yZXNvbHZlKHdvcmtlcikpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29uU2VydmljZVdvcmtlclByb21pc2VzID0gW107XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uU2VydmljZVdvcmtlclByb21pc2VzLmZvckVhY2gocHJvbWlzID0+IHByb21pcy5yZWplY3QoZXJyKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25TZXJ2aWNlV29ya2VyUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBnZXQgc3VwcG9ydGVkKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciAmJiAhIW5ldyBSZWFkYWJsZVN0cmVhbSgpICYmICEhbmV3IFdyaXRhYmxlU3RyZWFtKCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdldFNlcnZpY2VXb3JrZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZXJ2aWNlV29ya2VyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzLl9zZXJ2aWNlV29ya2VyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fb25TZXJ2aWNlV29ya2VyUHJvbWlzZXMucHVzaCh7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVTdHJlYW0oZmlsZU9wdGlvbnMsIHF1ZXVpbmdTdHJhdGVneSkge1xuICAgICAgICAgICAgLy8gVE9ETzogQWRkIG92ZXJsb2FkP1xuXG4gICAgICAgICAgICBjb25zdCBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdyaXRhYmxlU3RyZWFtKHtcbiAgICAgICAgICAgICAgICBzdGFydChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpcyBjYWxsZWQgaW1tZWRpYXRlbHksIGFuZCBzaG91bGQgcGVyZm9ybSBhbnkgYWN0aW9ucyBuZWNlc3NhcnkgdG8gYWNxdWlyZSBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgc2luay5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBwcm9jZXNzIGlzIGFzeW5jaHJvbm91cywgaXQgY2FuIHJldHVybiBhIHByb21pc2UgdG8gc2lnbmFsIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ2V0U2VydmljZVdvcmtlcigpLnRoZW4od29ya2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV2dC5kYXRhKSByZXR1cm4gcmVqZWN0KFwiU2VydmljZSB3b3JrZXIgZGlkIG5vdCBwcm92aWRlIGRvd25sb2FkIHVybFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBhZGQgYSBkb3dubG9hZCBhdHRyaWJ1dGUgdG8gdGhlIGxpbmsgdGhlIGRvd25sb2FkIGZhaWxzIG9uIENocm9tZS4gTm90IHN1cmUgd2h5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSBldnQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0cmluZ2lmeSB0aGUgZGF0YSBiZWZvcmUgc2VuZGluZyBmb3Igc2xpZ2h0bHkgaW1wcm92ZWQgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoZmlsZU9wdGlvbnMpLCBbY2hhbm5lbC5wb3J0Ml0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd3JpdGUoY2h1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXdhaXQgYW4gYW5zd2VyIHNvIHRoYXQgd2UgY2FuIGhhbmRsZSBiYWNrcHJlc3N1cmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWwucG9ydDEucG9zdE1lc3NhZ2UoY2h1bmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFubmVsLnBvcnQxLnBvc3RNZXNzYWdlKFwiY2xvc2VcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbC5wb3J0MS5wb3N0TWVzc2FnZShcImFib3J0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHF1ZXVpbmdTdHJhdGVneSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==