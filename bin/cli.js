#!/usr/bin/env node

'use strict';

const Module = require('module');
const Path = require('path');
const isAbsoultePath = require("path-is-absolute");

// Setup require hook.
require('../register.js');

// Remove buble-cli and make target path absolute.
let args = process.argv.slice(2);
let filepath = args[0];

if (!isAbsoultePath(filepath)) {
  args[0] = Path.join(process.cwd(), filepath);
}
process.argv = [ 'node' ].concat(args);

// Run targeted module.
Module.runMain();
