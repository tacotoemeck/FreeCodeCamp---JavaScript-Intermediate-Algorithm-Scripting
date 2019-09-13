/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

// long but strong

function fearNotLetter(str) {

	var codeArr = [];
	var missingLetterCode = 0;
	

  for ( var i = 0; i < str.length; i++) {
  	codeArr.push(str.charCodeAt(i))
  };

 for ( var j = 0; j < codeArr.length; j++) {
 	if ( codeArr[j+1] - codeArr[j] == 2) {
 		missingLetterCode = codeArr[j] + 1
 		
 	}
 };
if (missingLetterCode == 0 ) {
	return undefined;
} else {
return String.fromCharCode(missingLetterCode);
}
}

// short and sweet

function fearNotLetter(str) {

  for ( var i = 0; i < str.length; i++) {
  	var code = str.charCodeAt(i);

  	if (code !== str.charCodeAt(0) + i) {
  		return String.fromCharCode(code - 1)
  	}
  };

return undefined;
}

fearNotLetter("stvwx")


