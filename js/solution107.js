// ---DESCRIPTION:
/* 

7 kyu --- Largest Elements

Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]

*/



//---SOLUTION:
function largest(n, array) {
return n === 0 ? [] : array.sort((a,b) => a-b).slice(-n)
}
    

// ---RESULTS:
largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5])// [-1, 0]
largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])// [5, 5, 5]
largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5])// [3, 5, 9, 13, 22, 50, 63]