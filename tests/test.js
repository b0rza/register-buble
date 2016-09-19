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
