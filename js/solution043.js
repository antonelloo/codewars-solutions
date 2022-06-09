// DESCRIPTION:
// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

// Examples:

// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)


//SOLUTION

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password ===  "Ho Ho Ho!"
};
  
mergeArrays([1,2,3,4], [5,6,7,8]) //[1,2,3,4,5,6,7,8]
mergeArrays([1,3,5,7,9], [10,8,6,4,2]) //[1,2,3,4,5,6,7,8,9,10]
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])  //[1,2,3,4,5,7,9,10,11,12]