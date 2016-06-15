'use strict';

/*
 * finder
 * 
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 * 
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 * 
 */
module.exports = ( input, test ) => {
	var arr=[];
	var thisLen = input.length;
	for(var i = 0; i < thisLen; i++){
		if (test(input[i])) {
			arr.push(input[i]);
		}
	}
	console.log(arr);
};