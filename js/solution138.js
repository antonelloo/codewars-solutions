// ---DESCRIPTION:
/* 

7 kyu --- Find the Capitals

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

*/



//---SOLUTION:
function capitals(string){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
    let capitalIndexes = []

    string.split("").forEach((letter, index) => {
      if(alphabet.includes(letter)){
        capitalIndexes.push(index)
       }
    })   
    return capitalIndexes
    }


// ---RESULTS:
capitals('CodEWaRs')// [0,3,4,6] 