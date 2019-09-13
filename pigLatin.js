/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/

function translatePigLatin(str) {
  var result = '';
  var regex = (/[aeiou]/gi);
  var consonantArr = []

  
  for ( var i = 1; i < str.length; i++) {
  	  
  	  if ( str[i].match(regex)) {
  		consonantArr.push(str.indexOf(str[i]));
  		result = str.slice(consonantArr[0],) + (str.substring(0,consonantArr[0])) + "ay"; 
  	} else if (str[0].match(regex)) {
  	result = str + 'way';
  } 
  }

  if (result == "") {
  	return str + 'ay'
  } else {
  	return result
  }

}

translatePigLatin("zazzz");

