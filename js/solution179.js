// ---DESCRIPTION:
/* 

6 kyu --- Find the Odd Int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/



//---SOLUTION:
function findOdd(array) {
    const totals = {}

    for(let i=0; i<array.length; i++){
        totals.hasOwnProperty(`${array[i]}`) ? totals[`${array[i]}`] += 1 : totals[`${array[i]}`] = 1
      }
    
    for(let key in totals){
        if(totals[key] % 2 !== 0){
            return Number(key) 
        }
    }
  }


// ---RESULTS:
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) // 5
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) //-1
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]) // 5