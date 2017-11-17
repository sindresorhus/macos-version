'use strict';
const fs = require('fs');
const semver = require('semver');

const isMacOS = process.platform === 'darwin';
let version;

const clean = version => version.split('.').length === 2 ? `${version}.0` : version;

const getVersion = () => {
	if (!isMacOS) {
		return;
	}

	if (!version) {
		const file = fs.readFileSync('/System/Library/CoreServices/SystemVersion.plist', 'utf8');
		const matches = /<key>ProductVersion<\/key>[\s\S]*<string>([\d.]+)<\/string>/.exec(file);

		if (!matches) {
			return;
		}

		version = matches[1];
	}

	if (version) {
		return clean(version);
	}
};

module.exports = getVersion;

const x = module.exports;

x.isMacOS = isMacOS;

x.is = input => {
	if (!isMacOS) {
		return false;
	}

	return semver.satisfies(getVersion(), clean(input));
};

x.assertMacOS = () => {
	if (!isMacOS) {
		throw new Error('Requires macOS');
	}
};

x.isGreaterThanOrEqualTo = input => {
	if (!isMacOS) {
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
