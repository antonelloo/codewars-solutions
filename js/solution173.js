// ---DESCRIPTION:
/* 

7 kyu --- Debug Sum of Digits of a Number

Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

*/



//---SOLUTION:
function getSumOfDigits(integer) {
    return String(integer).split("").map(Number).reduce((total, n) => total + n, 0)
  }

  

// ---RESULTS:
getSumOfDigits(123) // 6
getSumOfDigits(223) // 7
getSumOfDigits(0) // 0