# osx-version [![Build Status](https://travis-ci.org/sindresorhus/osx-version.svg?branch=master)](https://travis-ci.org/sindresorhus/osx-version)

> Get the OS X version of the current system. Example: `10.9.3`


## Install

```
$ npm install --save osx-version
```


## Usage

```js
const osxVersion = require('osx-version');

osxVersion((err, version) => {
	console.log(version);
	//=> '10.9.3'
});
```


## CLI

```
$ npm install --global osx-version
```

```
$ osx-version --help

  Example
    $ osx-version
    10.9.3
```


## Related

- [osx-release](https://github.com/sindresorhus/osx-release) - Get the name and version of a OS X release from the Darwin version


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
