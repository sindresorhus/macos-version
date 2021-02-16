# macos-version

> Get or check the current macOS version

## Install

```
$ npm install macos-version
```

## Usage

```js
const macosVersion = require('macos-version');

macosVersion();
//=> '10.12.3'

macosVersion.is('>10.10');
//=> true

macosVersion.isGreaterThanOrEqualTo('10.10');
//=> true

macosVersion.assert('>=10.12.5');
//=> [Error: Requires macOS >=10.12.5]

macosVersion.assertGreaterThanOrEqualTo('10.12.5');
//=> [Error: Requires macOS 10.12.5 or later]

macosVersion.assertMacOS();
//=> [Error: Requires macOS]

if (macosVersion.isMacOS) {
	console.log('macOS');
}
```

## API

### macosVersion()

Returns the macOS version or `undefined` if the platform is not macOS.

### macosVersion.is(semverRange)

Returns a `boolean` of whether the specified [semver range](https://github.com/npm/node-semver#ranges) matches the macOS version.

### macosVersion.isGreaterThanOrEqualTo(version)

Returns a `boolean` of whether the macOS version is greater than or equal to the specified version.

### macosVersion.assert(semverRange)

Throws an error if the specified [semver range](https://github.com/npm/node-semver#ranges) does not match the macOS version.

### macosVersion.assertGreaterThanOrEqualTo(version)

Throws an error if the macOS version is not greater than or equal to the specified version.

*Prefer this over `.assert()` whenever possible as it outputs a more user-friendly error message.*

### macosVersion.assertMacOS()

Throws an error if the platform is not macOS.

### macosVersion.isMacOS

Type: `boolean`

Whether the platform is macOS.

## Related

- [macos-version-cli](https://github.com/sindresorhus/macos-version-cli) - CLI for this module
- [macos-release](https://github.com/sindresorhus/macos-release) - Get the name and version of a macOS release from the Darwin version
