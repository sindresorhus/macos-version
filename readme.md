# macos-version

> Get or check the current macOS version

## Install

```
$ npm install macos-version
```

## Usage

```js
import {
	macOSVersion,
	isMacOSVersion,
	isMacOSVersionGreaterThanOrEqualTo,
	assertMacOSVersion,
	assertMacOSVersionGreaterThanOrEqualTo,
	assertMacOS,
	isMacOS,
} from 'macos-version';

macOSVersion();
//=> '10.12.3'

isMacOSVersion('>10.10');
//=> true

isMacOSVersionGreaterThanOrEqualTo('10.10');
//=> true

assertMacOSVersion('>=10.12.5');
//=> [Error: Requires macOS >=10.12.5]

assertMacOSVersionGreaterThanOrEqualTo('10.12.5');
//=> [Error: Requires macOS 10.12.5 or later]

assertMacOS();
//=> [Error: Requires macOS]

if (isMacOS) {
	console.log('macOS');
}
```

## API

### macOSVersion()

Returns the macOS version or `undefined` if the platform is not macOS.

### isMacOSVersion(semverRange)

Returns a `boolean` of whether the specified [semver range](https://github.com/npm/node-semver#ranges) matches the macOS version.

### isMacOSVersionGreaterThanOrEqualTo(version)

Returns a `boolean` of whether the macOS version is greater than or equal to the specified version.

### assertMacOSVersion(semverRange)

Throws an error if the specified [semver range](https://github.com/npm/node-semver#ranges) does not match the macOS version.

### assertMacOSVersionGreaterThanOrEqualTo(version)

Throws an error if the macOS version is not greater than or equal to the specified version.

*Prefer this over `.assert()` whenever possible as it outputs a more user-friendly error message.*

### assertMacOS()

Throws an error if the platform is not macOS.

### isMacOS

Type: `boolean`

Whether the platform is macOS.

## Related

- [macos-version-cli](https://github.com/sindresorhus/macos-version-cli) - CLI for this module
- [macos-release](https://github.com/sindresorhus/macos-release) - Get the name and version of a macOS release from the Darwin version
