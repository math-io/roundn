'use strict';

// MODULES //

var test = require( 'tape' );
var roundn = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof roundn === 'function', 'main export is a function' );
	t.end();
});

test( 'the function rounds a numeric value to a desired number of decimals', function test( t ) {
	t.equal( roundn( Math.PI, -2 ), 3.14, 'equals 3.14' );
	t.equal( roundn( 9.99999, -2 ), 10, 'equals 10' );
	t.equal( roundn( 0, 2 ), 0, 'equals 0' );
	t.equal( roundn( 12368, -3 ), 12368, 'equals 12368' );
	t.end();
});

test( 'the function rounds a numeric value to a desired number of digits', function test( t ) {
	t.equal( roundn( Math.PI, 3 ), 0, 'equals 0' );
	t.equal( roundn( 12368, 3 ), 12000, 'equals 12000' );
	t.equal( roundn( 12368, 1 ), 12370, 'equals 12370' );
	t.end();
});

test( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = roundn( NaN, -2 );
	t.ok( val !== val, 'returns NaN' );
	t.end();
});

test( 'the function returns `+infinity` if provided a `+infinity`', function test( t ) {
	var val = roundn( Number.POSITIVE_INFINITY, 5 );
	t.equal( val, Number.POSITIVE_INFINITY, 'returns +infinity' );
	t.end();
});

test( 'the function returns `-infinity` if provided a `-infinity`', function test( t ) {
	var val = roundn( Number.NEGATIVE_INFINITY, -3 );
	t.equal( val, Number.NEGATIVE_INFINITY, 'returns -infinity' );
	t.end();
});
