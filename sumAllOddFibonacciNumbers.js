/*
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10)should return 10because all odd Fibonacci numbers less than or equal to 10are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


/// solution 1


function sumFibs(num) {
  
  var numPrevious = 0;
  var numCurrent = 1;
  var total = 0;

  while ( numCurrent <= num ) {
  	if ( numCurrent % 2 !== 0) {
  		total += numCurrent;
  	}
  	numCurrent += numPrevious;
  	 numPrevious = numCurrent - numPrevious;
  }
return total
}

sumFibs(10);


/// solution 2


function sumFibs(num) {
  
  var fibArr = [1, 1]
  var nextFib = 0;

if ( num === 0 || num === 1) return 1

while ( (nextFib = fibArr[0] + fibArr[1]) <= num ) {
	fibArr.unshift(nextFib)
}


return fibArr.filter(val => val % 2 !== 0).reduce((a,b) => a + b)

}

sumFibs(10);

