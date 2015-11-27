# top-dependents

> Fetches the top dependents for the given NPM module

[![NPM][top-dependents-icon] ][top-dependents-url]

[![Build status][top-dependents-ci-image] ][top-dependents-ci-url]
[![dependencies][top-dependents-dependencies-image] ][top-dependents-dependencies-url]
[![devdependencies][top-dependents-devdependencies-image] ][top-dependents-devdependencies-url]
[![semantic-release][semantic-image] ][semantic-url]
[![manpm](https://img.shields.io/badge/manpm-%E2%9C%93-3399ff.svg)](https://github.com/bahmutov/manpm)

## Install

    npm install --save top-dependents

## API

```js
var topDeps = require('top-dependents');
// returns an Api object
```

The module's api has the following promise-returning methods

### topDependents(packageName, maxNumber)

```js
topDeps.topDependents(name, n)
  .then(function (list) {
    // list is Array of strings - names of dependent modules
  });
/*
  example: topDeps.topDependents('heroin', 10)
    returns ['opiate', 'qunit-inject']
*/
```

### infoForDependents(metric, listOfNames)

Fetches given metric for a list of package names. Available metrics
are "downloads" and "starred".

```js
topDeps.infoForDependents(metric, listOfNames)
  .then(function (results) {
    // results { dependentA: X, dependentB: Y }
    // where X, Y are metrics
  });
```

### sortedByValue(object)

Takes an object where all values are numbers and returns list of properties
corresponding to the values sorted in descending order. Provided for convenience.

```js
var what = {
  a: 100,
  b: 20,
  c: 50
};
var sorted = topDeps.sortedByValue(what);
// sorted is ['a', 'c', 'b']
```

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/top-dependents/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[top-dependents-icon]: https://nodei.co/npm/top-dependents.png?downloads=true
[top-dependents-url]: https://npmjs.org/package/top-dependents
[top-dependents-ci-image]: https://travis-ci.org/bahmutov/top-dependents.png?branch=master
[top-dependents-ci-url]: https://travis-ci.org/bahmutov/top-dependents
[top-dependents-dependencies-image]: https://david-dm.org/bahmutov/top-dependents.png
[top-dependents-dependencies-url]: https://david-dm.org/bahmutov/top-dependents
[top-dependents-devdependencies-image]: https://david-dm.org/bahmutov/top-dependents/dev-status.png
[top-dependents-devdependencies-url]: https://david-dm.org/bahmutov/top-dependents#info=devDependencies
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
