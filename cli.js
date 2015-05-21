#!/usr/bin/env node
'use strict';
var meow = require('meow');
var osxVersion = require('./');

meow({
	help: [
		'Example',
		'  osx-version',
		'  10.9.3'
	].join('\n')
});

osxVersion(function (err, version) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(version);
});
