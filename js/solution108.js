// ---DESCRIPTION:
/* 

7 kyu --- Sum of Odd Cubed Numbers

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/



//---SOLUTION:
function cubeOdd(arr) {
const sum = arr.filter(el => el % 2 !== 0).map(el => Math.pow(el, 3)).reduce((total, value) => total + value, 0)
return arr.every(el => typeof el === "number") ? sum : undefined  
}


// ---RESULTS:
console.log(cubeOdd([1, 2, 3, 4])) //28
console.log(cubeOdd([-3,-2,2,3])) //0
console.log(cubeOdd(["a",12,9,"z",42])) //undefined)