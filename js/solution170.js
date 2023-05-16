// ---DESCRIPTION:
/* 

7 kyu --- Alphabetically ordered

Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

Examples (input -> output)
"kata" -> false ('a' comes after 'k')
"ant" -> true (all characters are in alphabetical order)

Good luck :)

*/



//---SOLUTION:
function alphabetic(word) {
    return word === word.split("").sort().join("")
  }

  

// ---RESULTS:
alphabetic("codewars") //false
alphabetic("door") //true
alphabetic("cell") //true