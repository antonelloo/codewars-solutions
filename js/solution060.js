// DESCRIPTION:
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle




//SOLUTION 

function otherAngle(a, b) {
    return 180-a-b
  }


otherAngle(60, 60)// 60
otherAngle(43, 78)// 59
otherAngle(10, 20)//150