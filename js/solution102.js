// ---DESCRIPTION:
/* 

7 kyu --- Changing Letters


When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/


//---SOLUTION 1:
function swap (string) {
    const v = 'aeiou'
    return string.split("").map(l => v.includes(l) ? l.toUpperCase() : l).join("")
  }
    
    
// ---RESULTS:
swap("Codewars", "COdEwArs");
swap("Monday", "MOndAy");
swap("Friday", "FrIdAy");
