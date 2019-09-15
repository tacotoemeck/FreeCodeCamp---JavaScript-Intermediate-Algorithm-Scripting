/*
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast;

  
  this.getFirstName = function() {
  	return fullName.split(' ')[0];
  };

  this.getLastName = function() {
  	return fullName.split(' ')[1];
  };

  this.setFirstName = function(first) {
  	fullName = first + " " + firstAndLast.split(' ')[1];
  };

  this.setLastName = function(last) {
  	fullName = firstAndLast.split(' ')[0] + " " + last;
  };

  this.setFullName = function(nameAndSurname) {
	fullName = nameAndSurname;
  };

  this.getFullName = function() {
    return fullName;
  };
  //return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry")
bob.getFirstName()

/*

1. distinguish seperate arguments from Person constructor
2. 
