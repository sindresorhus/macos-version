'use strict';
var execFile = require('child_process').execFile;
var pify = require('pify');
var Promise = require('pinkie-promise');

module.exports = function () {
	return pify(execFile, Promise)('sw_vers', ['-productVersion']).then(function (stdout) {
		return stdout.trim();
	});
};
