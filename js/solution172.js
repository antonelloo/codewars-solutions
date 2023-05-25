// ---DESCRIPTION:
/* 

7 kyu --- Running out of space

Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.

For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

*/



//---SOLUTION #1(Refactored):
function spacey(array){
let newString = ""
    return array.map(word => newString += word)
}

//---SOLUTION #2:
function spacey(array){
const newArray = []
let newString = ""
    for(let i=0; i<array.length; i++){
        newArray.push(newString +=array[i])
    }
        return newArray
}
  

// ---RESULTS:
spacey(['kevin', 'has','no','space']) // [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
spacey(['this','cheese','has','no','holes']) // ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);