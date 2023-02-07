// ---DESCRIPTION:

// 6 kyu --- Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique



// ---SOLUTION:

function findUniq(arr) {
    const uniqueNumbers = Array.from(new Set(arr))
    return arr.indexOf(uniqueNumbers[0]) === arr.lastIndexOf(uniqueNumbers[0]) ? uniqueNumbers[0] : uniqueNumbers[1]
  }

// ---RESULTS:
findUniq([ 1, 1, 1, 2, 1, 1 ]) //2
findUniq([ 0, 0, 0.55, 0, 0 ]) //0.55
findUniq([ 10, 10, 10, 10, 10, 10, 10, 600 ]) //600
