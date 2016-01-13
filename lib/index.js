'use strict';

// MODULES //

var pow = require( 'math-power' );
var round = require( 'math-round' );


// ROUNDN //

/**
* FUNCTION: roundn( x, n )
*	Rounds a numeric value to the nearest multiple of 10^n.
*
* @param {Number} x - number to round
* @param {Number} n - power of 10 (integer)
* @returns {Number} rounded value
*/
function roundn( x, n ) {
	var scalar = pow( 10, -n );
	return round( x*scalar ) / scalar;
} // end FUNCTION roundn()


// EXPORTS //

module.exports = roundn;
