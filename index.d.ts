declare const macosVersion: {
	/**
	@returns The macOS version or `undefined` if the platform is not macOS.

	@example
	```
	import macosVersion = require('macos-version');

	macosVersion();
	//=> '10.12.3'
	```
	*/
	(): string | undefined;

	/**
	@returns Whether the specified [semver range](https://github.com/npm/node-semver#ranges) matches the macOS version.

	@example
	```
	import macosVersion = require('macos-version');

	macosVersion.is('>10.10');
	//=> true
	```
	*/
	is(semverRange: string): boolean;

	/**
	@returns Whether the macOS version is greater than or equal to the specified version.

	@example
	```
	import macosVersion = require('macos-version');

	macosVersion.isGreaterThanOrEqualTo('10.10');
	//=> true
	```
	*/
	isGreaterThanOrEqualTo(version: string): boolean;

	/**
	Throws an error if the specified [semver range](https://github.com/npm/node-semver#ranges) does not match the macOS version.

	@example
	```
	import macosVersion = require('macos-version');

	macosVersion.assert('>=10.12.5');
	//=> [Error: Requires macOS >=10.12.5]
	```
	*/
	assert(semverRange: string): void;

	/**
	Throws an error if the macOS version is not greater than or equal to the specified version.

	_Prefer this over `.assert()` whenever possible as it outputs a more user-friendly error message._

	@example
	```
	import macosVersion = require('macos-version');

	macosVersion.assertGreaterThanOrEqualTo('10.12.5');
	//=> [Error: Requires macOS 10.12.5 or later]
	```
	*/
	assertGreaterThanOrEqualTo(version: string): void;

	/**
	Throws an error if platform is not macOS.

	@example
	```
	import macosVersion = require('macos-version');

	macosVersion.assertMacOS();
	//=> [Error: Requires macOS]
	```
	*/
	assertMacOS(): void;

	/**
	Whether the platform is macOS.

	@example
	```
	import macosVersion = require('macos-version');

	if (macosVersion.isMacOS) {
		console.log('macOS');
	}
	```
	*/
	readonly isMacOS: boolean;

	// TODO: remove this in the next major version
	default: typeof macosVersion;
};

export = macosVersion;
