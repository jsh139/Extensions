var self = require("sdk/self").data;
var tab = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var workers = [];

pageMod.PageMod({
    include: ["https://meh.com/forum*", "https://mediocre.com/forum*", "https://drone.horse/forum*"],
    contentScriptFile: [self.url("jquery-2.1.4.min.js"), self.url("replyScroll.js")],
    onAttach: function onAttach(worker) {
        workers.push(worker);
        worker.on('detach', function() {
            detachWorker(this, workers);
        });
    }
});

function detachWorker(worker, workerArray) {
    var index = workerArray.indexOf(worker);
    if (index != -1) {
        workerArray.splice(index, 1);
    }
}

require("sdk/widget").Widget({
    id: "Meh-Scroller",
    label: "Scroll to next unread reply",
    contentUrl: self.url("icon16.png"),
    onClick: function () {
        for (var i = 0; i < workers.length; i++) {
            if (workers[i].tab == tab.activeTab) {
                console.log('Scrolling to next unread reply');
                workers[i].port.emit("scroll");
            }
        }
    }
});