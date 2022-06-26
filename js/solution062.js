// DESCRIPTION:

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!





//SOLUTION 

function doubleChar(str) {
    return str.split("").map(char => char.repeat(2)).join("")
  }


doubleChar("abcd") //"aabbccdd"
doubleChar("Adidas") // "AAddiiddaass"
doubleChar("1337") //"11333377"