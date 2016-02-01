var Promise = require('bluebird');

var time = require('./time');

function do_the_jobs() {
    return new Promise.resolve()
        .then(function () {
            time.pause_sync(400);
            console.log(Date.now() + ' custom, #1: done');
        })
        .then(function () {
            time.pause_sync(200);
            console.log(Date.now() + ' custom, #2: done');
        })
        .then(function () {
            time.pause_sync(100);
            console.log(Date.now() + ' custom, #3: done');
        });
};

module.exports = {
    do_the_jobs: do_the_jobs
};
