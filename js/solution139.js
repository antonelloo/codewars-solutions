// ---DESCRIPTION:
/* 

6 kyu --- Reverse every other word in the string

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

*/



//---SOLUTION:
function reverse(str){
    return str.trim().split(" ").map((w, i) => i % 2 === 0 ? w : w.split("").reverse("").join("")).join(" ")
    }



// ---RESULTS:
reverse("Reverse this string, please!") // "Reverse siht string, !esaelp"
reverse("I really don't like reversing strings!") //"I yllaer don't ekil reversing !sgnirts"