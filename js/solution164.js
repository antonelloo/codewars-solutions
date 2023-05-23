// ---DESCRIPTION:
/* 

6 kyu --- Sort Arrays (Ignoring Case)

Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

*/



//---SOLUTION:
const sortme = function(names){
 return names.sort((a,b) => a.localeCompare(b,'en',{ sensitivity: 'base' }))
}

  

// ---RESULTS:
sortme(["C", "d", "a", "B"]) // ["a", "B", "C", "d"]
sortme(["CodeWars"]) //["CodeWars"]
sortme([])// []