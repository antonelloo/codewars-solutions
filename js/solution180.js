// ---DESCRIPTION:
/* 

7 kyu --- Sum - Square Even, Root Odd


Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!

*/



//---SOLUTION:
const sumSquareEvenRootOdd = ns => {
    return +ns.map(num => num % 2 === 0 ? Math.pow(num, 2) : Math.sqrt(num)).reduce((total, n) => total + n, 0).toFixed(2)
  };


// ---RESULTS:
sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]) //91.61
sumSquareEvenRootOdd([1,14,9,8,17,21]) //272.71