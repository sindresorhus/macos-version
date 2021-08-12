import process from 'node:process';
import fs from 'node:fs';
import semver from 'semver';

export const isMacOS = process.platform === 'darwin';

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
	const matches = /<key>ProductVersion<\/key>\s*<string>([\d.]+)<\/string>/.exec(plist);
	if (!matches) {
		return;
	}

	return matches[1].replace('10.16', '11');
};

export function macOSVersion() {
	if (!isMacOS) {
		return;
	}

	if (!version) {
		const file = fs.readFileSync('/System/Library/CoreServices/SystemVersion.plist', 'utf8');
		const matches = parseVersion(file);

		if (!matches) {
			return;
		}

		version = clean(matches);
	}

	return version;
}

if (process.env.NODE_ENV === 'test') {
	macOSVersion._parseVersion = parseVersion;
}

export function isMacOSVersion(semverRange) {
	if (!isMacOS) {
		return false;
	}

	semverRange = semverRange.replace('10.16', '11');

	return semver.satisfies(macOSVersion(), clean(semverRange));
}

export function isMacOSVersionGreaterThanOrEqualTo(version) {
	if (!isMacOS) {
		return false;
	}

	version = version.replace('10.16', '11');

	return semver.gte(macOSVersion(), clean(version));
}

export function assertMacOSVersion(semverRange) {
	semverRange = semverRange.replace('10.16', '11');

	if (!isMacOSVersion(semverRange)) {
		throw new Error(`Requires macOS ${semverRange}`);
	}
}

export function assertMacOSVersionGreaterThanOrEqualTo(version) {
	version = version.replace('10.16', '11');

	if (!isMacOSVersionGreaterThanOrEqualTo(version)) {
		throw new Error(`Requires macOS ${version} or later`);
	}
}

export function assertMacOS() {
	if (!isMacOS) {
		throw new Error('Requires macOS');
	}
}
