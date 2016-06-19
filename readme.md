# macos-version [![Build Status](https://travis-ci.org/sindresorhus/macos-version.svg?branch=master)](https://travis-ci.org/sindresorhus/macos-version)

> Get the macOS version of the current system. Example: `10.9.3`


## Install

```
$ npm install --save macos-version
```


## Usage

```js
const macosVersion = require('macos-version');

macosVersion().then(version => {
	console.log(version);
	//=> '10.9.3'
});
```


## Related

- [macos-version-cli](https://github.com/sindresorhus/macos-version-cli) - CLI for this module
- [osx-release](https://github.com/sindresorhus/osx-release) - Get the name and version of a macOS release from the Darwin version


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
