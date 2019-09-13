/*

Intermediate Algorithm Scripting: Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function binaryAgent(str) {
  
var newBinary = str.split(" ");
var binaryCode = [];

for (var i = 0; i < newBinary.length; i++) {
	binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)))
}

return binaryCode.join("")
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


