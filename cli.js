#!/usr/bin/env node
'use strict';
var argv = require('minimist')(process.argv.slice(2));
var pkg = require('./package.json');
var osxVersion = require('./');

function help() {
	console.log([
		pkg.description,
		'',
		'Example',
		'  $ osx-version',
		'  10.9.3'
	].join('\n'));
}

if (argv.help) {
	help();
	return;
}

if (argv.version) {
	console.log(pkg.version);
	return;
}

osxVersion(function (err, version) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(version);
});
