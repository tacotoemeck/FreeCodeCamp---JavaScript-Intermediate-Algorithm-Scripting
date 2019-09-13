/*
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order.
*/







/// all tests passed. 

function diffArray(arr1, arr2) {

var newArr = arr1.filter(element => !(arr2.includes(element)));
var newArr2 =arr2.filter(element => !(arr1.includes(element)));

return newArr.concat(newArr2)

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

// above but shorter

function diffArray(arr1, arr2) {

return arr1
.concat(arr2)
.filter(element => !arr1.includes(element) || !arr2.includes(element)) ;

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

/// loop :

function diffArray(arr1, arr2) {

var newArr = [];

function compareArreys(arrOne, arrTwo) {
	for ( var i = 0; i< arrOne.length; i++) {
		if ( arrTwo.indexOf(arrOne[i]) == -1) {
			newArr.push(arrOne[i])
		}
	}
}

compareArreys(arr1, arr2);
compareArreys(arr2, arr1);

return newArr;

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
