# macos-version [![Build Status](https://travis-ci.org/sindresorhus/macos-version.svg?branch=master)](https://travis-ci.org/sindresorhus/macos-version)

> Get or check the current macOS version


## Install

```
$ npm install --save macos-version
```


## Usage

```js
const macosVersion = require('macos-version');

macosVersion();
//=> '10.12.3'

macosVersion.is('>10.10');
//=> true

macosVersion.assertGreaterThanOrEqualTo('10.12.5');
//=> [Error: Requires macOS 10.12.5 or later]
```


## API

### macosVersion()

Returns the macOS version.

### macosVersion.is(semverRange)

Returns a `boolean` of whether the specified [semver range](https://github.com/npm/node-semver#ranges) matches the macOS version.

### macosVersion.isGreaterThanOrEqualTo(version)

Returns a `boolean` of whether the macOS version is greater than or equal to the specified version.

### macosVersion.assert(semverRange)

Throws an error if the specified [semver range](https://github.com/npm/node-semver#ranges) does not match the macOS version.

### macosVersion.assertGreaterThanOrEqualTo(version)

Throws an error if the macOS version is not greater than or equal to the specified version.

*Prefer this over `.assert()` whenever possible as it outputs a more user-friendly error message.*

### assertMacOS()

Throws an error if platform is not macOS.

### .isMacOS

True if platform is macOS.


## Related

- [macos-version-cli](https://github.com/sindresorhus/macos-version-cli) - CLI for this module
- [macos-release](https://github.com/sindresorhus/macos-release) - Get the name and version of a macOS release from the Darwin version


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
