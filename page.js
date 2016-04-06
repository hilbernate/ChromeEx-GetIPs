


chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    window.location.href = window.location.href.replace(
        /(http:\/\/)(.*?)(:[0-9]*)?(\/.*)/,
        function (match, protocal, host, port, after) {
            return protocal + request.ip + (port || '') + after;
        }
    );
});
