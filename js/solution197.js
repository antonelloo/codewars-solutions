// ---DESCRIPTION:
/* 

7 kyu --- Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

*/


//---SOLUTION #1(refactored):
function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.toLowerCase().length 
  }

//---SOLUTION #2:
function isIsogram(str){
    return Array.from(new Set(str.toLowerCase())).join("").length === str.toLowerCase().length ? true : false 
  }

  
// ---RESULTS:
isIsogram("moOse") // false
isIsogram("Dermatoglyphics")// true 
isIsogram("isIsogram") //false
isIsogram("") // true