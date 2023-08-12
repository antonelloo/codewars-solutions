// ---DESCRIPTION:
/* 

7 kyu --- Two numbers are positive

Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false

*/



//---SOLUTION #1(refactored):
function twoArePositive(...theArgs) {
    return theArgs.filter(n => n > 0).length === 2;
  }
//---SOLUTION #2:
function twoArePositive(...theArgs) {
    let positive = 0 
    let negative = 0 
    theArgs.map(n => n > 0 ? positive++ : negative--)
    return positive === 2 || negative === 1 ? true : false
  }

  

// ---RESULTS:
twoArePositive(4, 6, 0) // true 
twoArePositive(-4, 6, 0) // false
twoArePositive(4, 6, 10) //false