var common_module = require('./common');
var custom_module = require('./custom');

common_module.do_a_job()
    .then(function () {
        // do_the_jobs() returns Promise, look at 'custom.js'
        return custom_module.do_the_jobs();
    })
    .then(function () {
        console.log(Date.now() + ' server: done');
    })
    .catch(function (err) {
        console.log(err);
    });
