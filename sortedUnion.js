/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


// solution 1

function uniteUnique(arr) {

var finalArr = [];


for ( var i = 0; i<arguments.length; i++) {
	var arrArguments = arguments[i]
	for ( var j = 0; j<arrArguments.length; j++) {
		var indexVal = arrArguments[j];
		if ( finalArr.indexOf(indexVal) < 0) {
			finalArr.push(indexVal)
			}
		}
	}

return finalArr
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 


// solution 2

function uniteUnique(arr) {

var finalArr = [];
var args = [...arguments]

for ( var i = 0; i<args.length; i++) {
	for ( var j = 0; j<args[i].length; j++) {
		if ( !finalArr.includes(args[i][j])) {
			finalArr.push(args[i][j])
		}
	}
}
return finalArr
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 


/// solution 3



function uniteUnique(arr) {

var args = [...arguments]

return args.reduce((arra,arrb) => arra.concat(arrb.filter(a => arra.indexOf(a) === -1)))


}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 


// 