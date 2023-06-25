// ---DESCRIPTION:
/* 

7 kyu --- Round up to the next multiple of 5

Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.

*/


//---SOLUTION:
function roundToNext5(n){
    let number = n 
    while(number % 5 !== 0){
      number += 1
    }
    return number 
  }

  
// ---RESULTS:
roundToNext5(1) //5
roundToNext5(-5) //-5
roundToNext5(121) //125