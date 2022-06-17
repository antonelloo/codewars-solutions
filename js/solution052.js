// DESCRIPTION:
// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"




//SOLUTION #1

function printArray(array){
    return array.map(item => item + ",").join("").slice(0, - 1)

  }

  //SOLUTION #2

  function printArray(array){
    return array.join()
    }

