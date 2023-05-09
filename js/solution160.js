// ---DESCRIPTION:
/* 

6 kyu --- Highest Rank Number in an Array

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/



//---SOLUTION:
function highestRank(array){
    const totals = {}
    const result = []
  
    for(let i=0; i<array.length; i++){
      totals.hasOwnProperty(`${array[i]}`) === false ? totals[`${array[i]}`] = 1 : totals[`${array[i]}`] += 1
    }
  
    for(let key in totals){
      totals[key] === Math.max(...Object.values(totals)) && result.push(key)
    }
  
    return Number(result[result.length-1])
  }


// ---RESULTS:
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]) //12
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]) //12
highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]) //3