// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.





//SOLUTION

function replace(s){
    return s.replace(/[aeiou]/gi, "!")       
  }


  replace("!Hi! Hi!") === "!H!! H!!"
  replace("aeiouae") === "!!!!!!!"
  replace("ABCDEE") === "!BCD!!"
