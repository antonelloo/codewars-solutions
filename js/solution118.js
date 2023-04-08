// ---DESCRIPTION:
/* 

7 kyu --- Alternate Case

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

*/



//---SOLUTION:
function alternateCase(s) {
    return s.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join("")
  }
    
  

// ---RESULTS:
alternateCase("abc") //"ABC")
alternateCase("ABC") //"abc"
alternateCase("Hello World") // "hELLO wORLD"