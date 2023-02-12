// ---DESCRIPTION:
/* 

7 kyu --- max diff - easy

You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
Have fun!

*/



//---SOLUTION:
function maxDiff(list) {
    const sortedList = list.sort((a,b) => a-b)
    return list.length === 0 ? 0 : sortedList[sortedList.length-1] - sortedList[0]
  };

// ---RESULTS:
maxDiff([-0, 1, 2, -3, 4, 5, -6])// 11
maxDiff([0, 1, 2, 3, 4, 5, 16])// 16
maxDiff([16])//0