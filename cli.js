#!/usr/bin/env node
'use strict';
var meow = require('meow');
var osxVersion = require('./');

meow([
	'Example',
	'  osx-version',
	'  10.9.3'
]);

osxVersion().then(function (version) {
	console.log(version);
});
