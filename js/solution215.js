// ---DESCRIPTION:
/* 

7 kyu --- Name Array Capping

Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

*/



//---SOLUTION:
function capMe(names) {
    return names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
}


// ---RESULTS:
capMe(['jo', 'nelson', 'jurie'])     // ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // ['Karly', 'Daniel', 'Kelsey']