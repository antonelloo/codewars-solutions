// ---DESCRIPTION:
/* 

6 kyu --- Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/



//---SOLUTION:
function spinWords(string){
    return string.split(" ").map(w => w.length >= 5 ? w.split("").reverse().join("") : w).join(" ")
  }
    


// ---RESULTS:
spinWords("This is a test")// "This is a test");
spinWords("This is another test")// "This is rehtona test");
spinWords("You are almost to the last test")// "You are tsomla to the last test");