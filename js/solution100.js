// ---DESCRIPTION:
/* 
7 kyu --- Most  Digits

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/


//---SOLUTION #2 (refactored):
function findLongest(nums){
    return nums.reduce((a,b) => String(b).length > String(a).length ? b : a)
}


//---SOLUTION #1:
function findLongest(array){
const lengthArray = array.map(String).map(l => l = l.length)
const numMostDigits = Math.max(...lengthArray)
    return array[lengthArray.indexOf(numMostDigits)]
} 
    
    
// ---RESULTS:
findLongest([1, 10, 100]) //100
findLongest([9000, 8, 800]) //9000
findLongest([8, 900, 500])// 900
