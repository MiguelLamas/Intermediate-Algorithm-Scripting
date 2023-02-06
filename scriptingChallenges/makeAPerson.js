/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object. */

const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0]
  };
  this.getLastName = function() {
    return firstAndLast.split(" ")[1]
  };
  this.getFullName = function() {
    return firstAndLast
  };
  this.setFirstName = function(first) {
    firstAndLast = first + " " + firstAndLast.split(" ")[1]
  };
  this.setLastName = function(last) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + last
  };
  this.setFullName = function(fullName) {
    firstAndLast = fullName
  }; 
};

const bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
// console.log(bob.setFirstName("Haskell"));
// console.log(bob.setLastName("Curry"));
// console.log(bob.setFullName("Haskell Curry"));