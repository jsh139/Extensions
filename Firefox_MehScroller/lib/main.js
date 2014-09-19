var self = require("sdk/self");

var button = require("sdk/ui/button/action").ActionButton({
    id: "Meh-Scroller",
    label: "Scroll to next unread reply",
    icon: {
        "16": "./icon16.png",
        "32": "./icon32.png",
        "64": "./icon64.png"
    },
    onClick: function () {
        console.log('Scrolling to next unread reply');
        require("sdk/tabs").activeTab.attach({
            contentScriptFile: [self.data.url("jquery-2.1.1.min.js"), self.data.url("replyScroll.js")]
        });
    }
});