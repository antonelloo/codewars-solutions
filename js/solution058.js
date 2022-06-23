// DESCRIPTION:
// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each 
// element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!






//SOLUTION 

function arrayMadness(a, b) {
    let sumOfSquares = a.map(num => num * num).reduce((sum, n) => sum + n) 
    let sumOfCubes = b.map(num => num**3).reduce((sum,n) => sum + n)
    return sumOfSquares > sumOfCubes
  }

  

arrayMadness([4,5,6],[1,2,3]) //true)
arrayMadness([5,6,7],[4,5,6]) //false)
arrayMadness([4,5,6],[3,4,5]) //false)