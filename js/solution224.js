/* 

7 kyu --- Double Every Other

---DESCRIPTION:

Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]

*/



//---SOLUTION:
function doubleEveryOther(a) {
    return a.map((n,i) => i % 2 !== 0 ? n * 2 : n)
}
    
  

// ---RESULTS:
doubleEveryOther([1,2,3,4]) // [1,4,3,8]
doubleEveryOther([10,20,30,40]) // [10,40,30,80]
doubleEveryOther([3,6,9,12]) // [3,12,9,24]