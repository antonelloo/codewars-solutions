/* 

7 kyu --- The old switcheroo 2

Write the function :

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase()

*/



//---SOLUTION:
function encode(str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    return str.toLowerCase().split("").map(l => alpha.includes(l) ? alpha.indexOf(l)+1 : l).join("")
   }



// ---RESULTS:
encode('ABCD') //'1234'
encode('ZzzzZ') //'2626262626'
encode('abc-#@5') //'123-#@5'