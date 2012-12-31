Attach Filters to Jade
----------------------

A convinience module for attaching arbitrary _filters_ to
[Jade](https://github.com/visionmedia/jade).

# Installation

`npm install jade-attachfilter`

# Usage

```js
// Add a filter
var attachfilter = require('jade-attachfilter');
attachfilter('uppercase', function (str, options) {
  return str.toUpperCase();
});

// Use filter
var str  = ':uppercase\n  hello world';
var html = jade.compile(jade)();
```

## Options

You can make Jade pass options to your filter by doing:

```jade
:myfilter(foo=bar, baz=hey)
  Do stuff with this text block.
```

```js
attachfilter('myfilter', function (str, options) {
  if (options.foo === 'bar') {
    return 'no foo for you';
  }
  else {
    return str;
  }
});
```

# License

ISC

