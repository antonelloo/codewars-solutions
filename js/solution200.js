// ---DESCRIPTION:
/* 

7 kyu --- Sum a list but ignore any duplicates

Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/



//---SOLUTION:
function sumNoDuplicates(numList) {
    return numList.filter((e,i,a) => a.indexOf(e) === a.lastIndexOf(e)).reduce((t, v) => t + v, 0)
    }
  

    
// ---RESULTS:
sumNoDuplicates([3, 4, 3, 6]) //10