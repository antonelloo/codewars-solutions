// ---DESCRIPTION:
/* 

7 kyu --- Consecutive Items

You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

*/



//---SOLUTION #1(refactored):
function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1
}


//---SOLUTION #2:
function consecutive(arr, a, b) {
    const first = arr.indexOf(a)
    const second = arr.indexOf(b)
    return first + 1 === second || first - 1 === second 
  }



// ---RESULTS:
consecutive([1, 3, 5, 7], 3, 7) // false
consecutive([1, 3, 5, 7], 3, 1) // true
consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4) // true