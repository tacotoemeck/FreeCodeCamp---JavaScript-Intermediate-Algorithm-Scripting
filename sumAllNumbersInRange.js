/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/



function sumAll(arr) {

var sortedArr = arr.sort((a,b) => a-b)
var numLeft = sortedArr[0];
var numRight = sortedArr[1];
var total = [];

for ( var num = numLeft + 1; num < numRight; num++) {
total.push(num);
}
return total.reduce((a,b) => a+b) + arr.reduce((a,b) => a+b)

}

sumAll([5, 10])
