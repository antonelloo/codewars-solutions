/* 

7 kyu --- Inspiring Strings

When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold

*/




//---SOLUTION:
function longestWord(stringOfWords){
    return stringOfWords.split(" ").reduce((s,l) => s.length > l.length ? s : l)
  }
  



// ---RESULTS:
longestWord('a b c d e fgh') //"fgh" 
longestWord('one two three') // "three" 
longestWord('red blue grey') //"grey" 