'use strict';

/*
 * balancedParentheses
 * 
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 * 
 * Eg:
 * 
 *   input: '(x + y)'
 *   returns: true
 * 
 *   input: '(x + y'
 *   returns: false
 * 
 *   input: 'foo bar baz'
 *   returns: false
 * 
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
	var count = 0;
	var res = input.split('');

	for (var i = 0; i < res.length; i++) {
		if(res[i]=="("){
			count++;
		}
		if(res[i]==")"){
			count--;
		}
	}
	if (count==0) {
		console.log(true);
	}else{
        console.log(false);
	}
};