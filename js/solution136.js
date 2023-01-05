// ---DESCRIPTION:
/* 

7 kyu --- esreveR

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

*/



//---SOLUTION:
const reverse = function(array) {
    let reversedArray = []
    for(let i=array.length-1; i>=0; i--){
        reversedArray.push(array[i])
    }
    return reversedArray
  }

  

// ---RESULTS:
reverse([1,2,3]) //[3,2,1] 
reverse([1,null,14,"two"]) // ["two",14,null,1] 