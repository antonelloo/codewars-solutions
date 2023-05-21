// ---DESCRIPTION:
/* 

7 kyu --- Return a string's even characters.

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"

*/



//---SOLUTION:
function evenChars(string) {
return string.length < 2 || string.length > 100 ? 'invalid string' : string.split("").filter((e,i,a) => i % 2 !== 0)
}

  

// ---RESULTS:
evenChars (";;;--") // [";", "-"]
evenChars ("abcdefghijklm") //["b", "d", "f", "h", "j", "l"]
evenChars ("a") // "invalid string"