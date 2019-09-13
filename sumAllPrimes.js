/*
Intermediate Algorithm Scripting: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/////////// works but doesn't pass the test

function sumPrimes(num) {

	var allNumsArr = [] // arr with all numbers

	for ( var i = 2; i <= num; i++) {
		allNumsArr.push(i)
	}

	for ( var k =2; k <= allNumsArr[k]; k++) {
		
		for(var j=2; j <= num; j++) {
			

			if ( allNumsArr[k] % j === 0 && allNumsArr[k] !== j ) {
				delete allNumsArr[k]
			}
		}
	}

	return allNumsArr.filter(val => val != "empty").reduce((a,b) => a+b)
}

sumPrimes(977)






