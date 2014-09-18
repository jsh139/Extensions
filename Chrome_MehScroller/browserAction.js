chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Scrolling to next unread reply');
    chrome.tabs.executeScript({
       file: 'replyScroll.js'
    });
});