// ---DESCRIPTION:
/* 

6 kyu --- Difference of 2

The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

*/



//---SOLUTION:
function twosDifference(input){
    const pairs = []
    for(let i=0; i<input.length; i++){
        for(let j=0; j<input.length; j++){
            input[i] + 2 === input[j] ? pairs.push([input[i], input[j]]) : null
        }
    }
    return pairs.sort((a,b) => a[0]-b[0] )
   }


// ---RESULTS:
twosDifference([1,2,3,4]) //[[1,3],[2,4]]
twosDifference([1,3,4,6]) //[[1,3],[4,6]]
twosDifference([4, 3, 1, 5, 6]) //[[1, 3], [3, 5], [4, 6]]