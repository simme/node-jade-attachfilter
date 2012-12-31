//
// # Attach a new filter to jade
//
// Since objects are cached by the module loading system we can just require
// Jade and add another filter to it's filter array.
//
module.exports = function (filter, fn) {
  try {
    var jade = require('jade');
    jade.filters[filter] = fn;
  } catch (err) {
    throw new Error('Jade must be installed.');
  }
};

