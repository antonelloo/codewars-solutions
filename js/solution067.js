// DESCRIPTION:
// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.



// --Solution--

function lastSurvivor(letters, array) {
  const lettersArray = letters.split("")
  
  while(array.length > 0){
    lettersArray.splice(array[0], 1)
    array.shift()
  }
  
  return lettersArray.join("")
}


// --Results--
lastSurvivor('kbc', [0, 1]) //Result: "b"
lastSurvivor('abc', [1, 1]) //Result: "a"