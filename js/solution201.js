// ---DESCRIPTION:
/* 

7 kyu --- Double Sort

empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.

*/




//---SOLUTION:
function dbSort(a){
    const numbers = a.filter(e => typeof e === 'number').sort((a,b) => a-b)
    const strings = a .filter(e => typeof e === 'string').sort()
    return numbers.concat(strings)
   }
  

    
// ---RESULTS:
dbSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]) // [0,2,2,"Apple","Banana","Mango","Orange"]
ddbSort(["C", "W", "W", "W", 1, 2, 0]) // [0,1,2,"C","W","W","W"]