// Dirty & dangerous pause-the-world 'sleep()'
function pause_sync(millis) {
    var date = Date.now();
    var curDate = null;
    do {
        curDate = Date.now();
    } while (curDate - date < millis);
}

module.exports = {
    pause_sync: pause_sync
};
