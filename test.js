'use strict';
var assert = require('assert');
var osxVersion = require('./');

it('should return the current OS X version', function (cb) {
	osxVersion(function (err, version) {
		console.log('Version:', version);
		assert(!err, err);
		assert(version.length > 0);
		cb();
	});
});
