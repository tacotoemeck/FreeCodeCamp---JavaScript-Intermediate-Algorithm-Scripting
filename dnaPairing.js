/*
Intermediate Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function pairElement(str) {

var A = ["A", "T"];
var T = ["T", "A"];
var G = ["G", "C"];
var C = ["C", "G"];

var result = []

for ( var i = 0; i < str.length; i++) {
	if ( str[i] == "A") {
		result.push(A);
	} if ( str[i] == "T") {
		result.push(T);
	} if ( str[i] == "G") {
		result.push(G);
	} if ( str[i] == "C") {
		result.push(C);
	}
}
return result;

}

pairElement("GCG");

//

function pairElement(str) {

var result = []

for ( var i = 0; i < str.length; i++) {
	if ( str[i] == "A") {
		result.push(["A", "T"]);
	} if ( str[i] == "T") {
		result.push(["T", "A"]);
	} if ( str[i] == "G") {
		result.push(["G", "C"]);
	} if ( str[i] == "C") {
		result.push(["C", "G"]);
	}
}
return result;

}

pairElement("GCG");
