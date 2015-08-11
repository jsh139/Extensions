chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (~tab.url.indexOf('meh.com/forum') || ~tab.url.indexOf('mediocre.com/forum') || ~tab.url.indexOf('drone.horse/forum')) {
//        console.log('background tab id is:' + tabId);
        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(function (tab) {
    console.log('Scrolling to next unread');
    chrome.tabs.executeScript(tab.id, { file: 'replyScroll.js' });
});
