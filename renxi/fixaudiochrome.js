chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse) {
    setTimeout(function() {
        sendResponse({status: true});
    }, 1);
    return true;  // Return true to fix the error
});