var assert = require('assert');
var jade = require('jade');
var jadefilters = require('../attachfilter.js');
var render = function (str, options) {
  var fn = jade.compile(str, options);
  return fn(options);
};
suite('Test adding a filter', function () {
  test('Add filter', function () {
    jadefilters('foo', function (str, options) {
      return str.toUpperCase();
    });

    var str  = ':foo\n  hello world';
    var html = 'HELLO WORLD';
    assert.equal(html, render(str));
  });
});

