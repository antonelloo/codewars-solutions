// ---DESCRIPTION:
/* 

6 kyu --- Valid Phone Number

Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false

*/



//---SOLUTION:
function validPhoneNumber(phoneNumber){
    if(phoneNumber[0] === "(" && phoneNumber[4] === ")" && phoneNumber[5] === " " && phoneNumber[9] === "-" && phoneNumber.length === 14){
      const array = phoneNumber.split("")
      array.splice(0,1)
      array.splice(3,1)
      array.splice(3,1)
      array.splice(6,1)
      return array.map(Number).every(e => typeof e === 'number' ? true : false)
  }else{
    return false 
  }
  }
    
  

// ---RESULTS:
validPhoneNumber("(123) 456-7890")//true
validPhoneNumber("(1111)555 2345")// false
validPhoneNumber("(098) 123 4567")//false
