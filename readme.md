# osx-version [![Build Status](https://travis-ci.org/sindresorhus/osx-version.svg?branch=master)](https://travis-ci.org/sindresorhus/osx-version)

> Get the OS X version of the current system. Example: `10.9.3`


## Install

```
$ npm install --save osx-version
```


## Usage

```js
const osxVersion = require('osx-version');

osxVersion().then(version => {
	console.log(version);
	//=> '10.9.3'
});
```


## Related

- [osx-version-cli](https://github.com/sindresorhus/osx-version-cli) - CLI for this module
- [osx-release](https://github.com/sindresorhus/osx-release) - Get the name and version of a OS X release from the Darwin version


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
