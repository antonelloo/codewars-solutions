// ---DESCRIPTION:
/* 

7 kyu --- Flatten

Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]

*/


//---SOLUTION #1:
var flatten = function (array){
    return array.flat()
  }


// ---RESULTS:
flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])// [1, 2, 3, "a", "b", "c", 1, 2, 3]
flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])// [3, 4, 5, [9, 9, 9], "a,b,c"]
flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])// [[3], [4], [5], 9, 9, 8, [1, 2, 3]]