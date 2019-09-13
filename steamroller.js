/*
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/



// too easy!

function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.flat(Infinity);
}

steamrollArray([1, [2], [3, [[4]]]]);


/// let's complicate it aka solution 2

function steamrollArray(arr) {
  var flatArr = [];

for ( var i = 0; i < arr.length; i++) {
	if (Array.isArray(arr[i])) {
		flatArr = flatArr.concat(steamrollArray(arr[i]));
	} else {
		flatArr.push(arr[i])
	}
}
return flatArr
}

steamrollArray([1, [2], [3, [[4]]]]);

