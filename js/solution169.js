// ---DESCRIPTION:
/* 

7 kyu --- Length and Two Values

Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []

Good luck!

*/



//---SOLUTION:
function alternate(n, firstValue, secondValue){
    const array = []
    for(let i=0; i<n; i++){
     i % 2 === 0 ? array.push(firstValue) : array.push(secondValue) 
    }
    return array 
    }

  

// ---RESULTS:
alternate(5, true, false) // [true, false, true, false, true])
alternate(20, 'blue', 'red') // ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
alternate(0, "lemons", "apples") // []