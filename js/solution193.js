// ---DESCRIPTION:
/* 

7 kyu --- Find The Duplicated Number in a Consecutive Unsorted List

You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.

*/



//---SOLUTION:
function findDup( arr ){
    const duplicate = arr.filter(value => arr.indexOf(value) !== arr.lastIndexOf(value)) 
    return duplicate[0]
  }


  
// ---RESULTS:
findDup([1,2,2,3]) // 2
findDup([1,3,2,5,4,5,7,6]) // 5