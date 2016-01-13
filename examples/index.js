'use strict';

var roundn = require( './../lib' );

var x;
var n;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	n = roundn( Math.random()*5, 0 );
	console.log( 'Value: %d. Number of decimals: %d. Rounded: %d.', x, n, roundn( x, -n ) );
}
