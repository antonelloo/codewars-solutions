// ---DESCRIPTION:
/* 

7 kyu --- Find min and max

Implement a function that returns the minimal and the maximal value of a list (in this order).

*/



//---SOLUTION:
function getMinMax(arr){
    return [Math.min(...arr), Math.max(...arr)]
  };



// ---RESULTS:
getMinMax([1]) //[1,1]
getMinMax([1,2]) //[1,2]
getMinMax([2,1]) //[1,2]