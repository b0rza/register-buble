'use strict';

const test = require('tape');

test('test require hook', t => {
  require('../register.js');
  let result = require('../example/syntax.js')();

  t.equals(result.max, 5);
  t.equals(result.data.code, 13);
  t.equals(result.data.meaningOfLife, 42);
  t.end();
});

test('test compile errors', t => {
  require('../register.js');
  let unsupported_path = '../example/unsupported.js';

  try {
    require(unsupported_path);
  } catch (err) {
    t.comment(err);
    t.equal(err.name, 'CompileError');
  }

  t.end();
});


test('test module not found errors', t => {
  require('../register.js');
  let not_found_path = '../example/not_found.js';

  try {
    require(not_found_path);
  } catch (err) {
    t.comment(err);
    t.equal(err.code, 'MODULE_NOT_FOUND');
    t.equal(err.message, `Cannot find module '${ not_found_path }'`);
  }

  t.end();
});
