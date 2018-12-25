'use strict';
const fs = require('fs');
const semver = require('semver');

const isMacOS = process.platform === 'darwin';
let version;

const clean = version => version.split('.').length === 2 ? `${version}.0` : version;

const parseVersion = plist => {
	const matches = /<key>ProductVersion<\/key>[\s]*<string>([\d.]+)<\/string>/.exec(plist);
	if (!matches) {
		return;
	}

	return matches[1];
};

const getVersion = () => {
	if (!isMacOS) {
		return;
	}

	if (!version) {
		const file = fs.readFileSync('/System/Library/CoreServices/SystemVersion.plist', 'utf8');
		const matches = parseVersion(file);

		if (!matches) {
			return;
		}

		version = matches;
	}

	if (version) {
		return clean(version);
	}
};

module.exports = getVersion;

const x = module.exports;

x._parseVersion = parseVersion;

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
