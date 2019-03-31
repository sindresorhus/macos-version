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
// TODO: remove this in the next major version
module.exports.default = getVersion;

getVersion._parseVersion = parseVersion;

getVersion.isMacOS = isMacOS;

getVersion.is = input => {
	if (!isMacOS) {
		return false;
	}

	return semver.satisfies(getVersion(), clean(input));
};

getVersion.isGreaterThanOrEqualTo = input => {
	if (!isMacOS) {
		return false;
	}

	return semver.gte(getVersion(), clean(input));
};

getVersion.assert = input => {
	if (!getVersion.is(input)) {
		throw new Error(`Requires macOS ${input}`);
	}
};

getVersion.assertGreaterThanOrEqualTo = input => {
	if (!getVersion.isGreaterThanOrEqualTo(input)) {
		throw new Error(`Requires macOS ${input} or later`);
	}
};

getVersion.assertMacOS = () => {
	if (!isMacOS) {
		throw new Error('Requires macOS');
	}
};
