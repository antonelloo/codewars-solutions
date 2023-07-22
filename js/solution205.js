// ---DESCRIPTION:
/* 

7 kyu --- Return String of First Characters

In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

*/




//---SOLUTION:
function makeString(s){
    return s.split(" ").map(e => e[0]).join("")
  }


    
// ---RESULTS:
makeString("sees eyes xray yoat")// "sexy"
makeString("brown eyes are nice")// "bean"
makeString("cars are very nice")// "cavn"