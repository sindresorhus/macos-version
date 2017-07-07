'use strict';
const fs = require('fs');
const semver = require('semver');

const isMacos = process.platform === 'darwin';
let version;

const clean = version => version.split('.').length === 2 ? `${version}.0` : version;

const getVersion = () => {
	if (!isMacos) {
		throw new Error('Requires macOS');
	}

	if (!version) {
		const file = fs.readFileSync('/System/Library/CoreServices/SystemVersion.plist', 'utf8');
		const matches = /<key>ProductVersion<\/key>[\s\S]*<string>([\d.]+)<\/string>/.exec(file);

		if (!matches) {
			throw new Error('Couldn\'t find the macOS version');
		}

		version = matches[1];
	}

	return clean(version);
};

module.exports = getVersion;

const x = module.exports;

x.is = input => {
	if (!isMacos) {
		return false;
	}

	return semver.satisfies(getVersion(), clean(input));
};

x.isGreaterThanOrEqualTo = input => {
	if (!isMacos) {
		return false;
	}

	return semver.gte(getVersion(), clean(input));
};

x.assert = input => {
	if (!x.is(input)) {
		throw new Error(`Requires macOS ${input}`);
	}
};

x.assertGreaterThanOrEqualTo = input => {
	if (!x.isGreaterThanOrEqualTo(input)) {
		throw new Error(`Requires macOS ${input} or later`);
	}
};
