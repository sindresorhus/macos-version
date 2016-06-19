'use strict';
const execa = require('execa');

module.exports = () => execa.stdout('sw_vers', ['-productVersion']);
