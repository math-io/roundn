Roundn
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Rounds a numeric value to the nearest multiple of 10^n.


## Installation

``` bash
$ npm install math-roundn
```


## Usage

``` javascript
var roundn = require( 'math-roundn' );
```

#### roundn( x, n )

Rounds a `numeric` value to the nearest multiple of `10^n`.

``` javascript
// Round a value to 2 decimal places:
var val = roundn( Math.PI, -2 );
// returns 3.14

// If n = 0, `roundn` behaves like `round`:
val = roundn( Math.PI, 0 );
// returns 3

// Round a value to the nearest thousand:
val = roundn( 12368, 3 );
// returns 12000
```


## Examples

``` javascript
var roundn = require( 'math-roundn' );

var x;
var n;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	n = roundn( Math.random()*5, 0 );
	console.log( 'Value: %d. Number of decimals: %d. Rounded: %d.', x, n, roundn( x, -n ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-roundn.svg
[npm-url]: https://npmjs.org/package/math-roundn

[build-image]: http://img.shields.io/travis/math-io/roundn/master.svg
[build-url]: https://travis-ci.org/math-io/roundn

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/roundn/master.svg
[coverage-url]: https://codecov.io/github/math-io/roundn?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/roundn.svg
[dependencies-url]: https://david-dm.org/math-io/roundn

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/roundn.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/roundn

[github-issues-image]: http://img.shields.io/github/issues/math-io/roundn.svg
[github-issues-url]: https://github.com/math-io/roundn/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
