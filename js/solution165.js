// ---DESCRIPTION:
/* 

6 kyu --- Is Integer Array?

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.

*/



//---SOLUTION:
function isIntArray(arr) {
return !Array.isArray(arr) ? false : arr.every(e => Number.isInteger(e))
}

  

// ---RESULTS:
isIntArray([]) //true, "Input: []"
isIntArray([1, 2, 3, 4]) //true, "Input: [1, 2, 3, 4]"
isIntArray([1, 2, 3, NaN]) // false, "Input: [1, 2, 3, NaN]"