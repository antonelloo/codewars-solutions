// ---DESCRIPTION:
// 6 kyu --- Sort the odd

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]



// ---SOLUTION:


//Solution#1 (refactored):
function sortArray(array) {
    const oddArray = array.filter((number) => number % 2 !== 0).sort((a,b) => a - b);
    return array.map((number) => number % 2 !==0 ? oddArray.shift() : number);
    }
    

//Solution#2 (original):
function sortArray1(array){
    const sortedArray = []
    const oddArray = array.filter(number => number % 2 !== 0).sort((a,b) => a-b)
    
    for(let i=0; i<array.length; i++){
      if(array[i] % 2 === 0 ){
        sortedArray.push(array[i])
      }else{
          sortedArray.push(oddArray.shift())
      }
    }
    return sortedArray
    }
    
    

// ---RESULTS:
sortArray([7, 1]) //[1, 7]
sortArray([5, 8, 6, 3, 4]) //[3, 8, 6, 5, 4]
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]