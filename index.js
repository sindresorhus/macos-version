'use strict';
const fs = require('fs');
const semver = require('semver');

const isMacOS = process.platform === 'darwin';
let version;

const clean = version => {
	const {length} = version.split('.');

	if (length === 1) {
		return `${version}.0.0`;
	}

	if (length === 2) {
		return `${version}.0`;
	}

	return version;
};

const parseVersion = plist => {
	const matches = /<key>ProductVersion<\/key>[\s]*<string>([\d.]+)<\/string>/.exec(plist);
	if (!matches) {
		return;
	}

	return matches[1].replace('10.16', '11');
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

	input = input.replace('10.16', '11');

	return semver.satisfies(getVersion(), clean(input));
};

getVersion.isGreaterThanOrEqualTo = input => {
	if (!isMacOS) {
		return false;
	}

	input = input.replace('10.16', '11');

	return semver.gte(getVersion(), clean(input));
};

getVersion.assert = input => {
	input = input.replace('10.16', '11');

	if (!getVersion.is(input)) {
		throw new Error(`Requires macOS ${input}`);
	}
};

getVersion.assertGreaterThanOrEqualTo = input => {
	input = input.replace('10.16', '11');

	if (!getVersion.isGreaterThanOrEqualTo(input)) {
		throw new Error(`Requires macOS ${input} or later`);
	}
};

getVersion.assertMacOS = () => {
	if (!isMacOS) {
		throw new Error('Requires macOS');
	}
};
