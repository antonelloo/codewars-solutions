// ---DESCRIPTION:
// 6 kyu --- Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"



// ---SOLUTION:
function toCamelCase(str){
    const camelString = 
      str.replaceAll(/[-_]/g, " ")
      .split(" ")
      .map(function(word, index) {
        return index === 0 ? word : word.split("").map((letter, index) => index === 0 ? letter.toUpperCase() : letter.toLowerCase()).join("") 
      })
      .join("")
  
      return camelString
  }


// ---RESULTS:
toCamelCase('') // ''
toCamelCase("the_stealth_warrior") //"theStealthWarrior"
toCamelCase("The-Stealth-Warrior") //"TheStealthWarrior"
toCamelCase("A-B-C") //"ABC"