// --DESCRIPTION:



// --SOLUTION:

function lastSurvivor(letters, array) {
  const lettersArray = letters.split("")
  
  while(array.length > 0){
    lettersArray.splice(array[0], 1)
    array.shift()
  }
  
  return lettersArray.join("")
}


// --RESULTS--
lastSurvivor('kbc', [0, 1]) //Result: "b"
lastSurvivor('abc', [1, 1]) //Result: "a"