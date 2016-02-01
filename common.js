var Promise = require('bluebird');

function do_a_job() {
    return new Promise(function (resolve, reject) {
        console.log(Date.now() + ' common: done');
        resolve();
    });
};

module.exports = {
    do_a_job: do_a_job
};
