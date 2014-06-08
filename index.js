'use strict';
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	execFile('sw_vers', ['-productVersion'], function (err, stdout) {
		if (err) {
			return cb(err);
		}

		cb(null, stdout.trim());
	});
};
