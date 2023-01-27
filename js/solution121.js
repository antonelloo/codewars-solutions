// ---DESCRIPTION:
/* 

7 kyu --- How Many Unique Consonants?

Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

Consonants are letters used in English other than "a", "e", "i", "o", "u".

Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

Examples
"add" ==> 1
"Dad" ==> 1
"aeiou" ==> 0
"sillystring" ==> 7
"abcdefghijklmnopqrstuvwxyz" ==> 21
"Count my unique consonants!!" ==> 7

*/



//---SOLUTION:
function countConsonants(string) {
    const vowels = 'aeiou0123456789! '
    const noduplicateCharacters = Array.from(new Set(string.toLowerCase()))
    let totalUniqueConsonants = 0

    for(let i=0; i<noduplicateCharacters.length; i++){
      if(vowels.indexOf(noduplicateCharacters[i]) === -1){
        totalUniqueConsonants += 1
      }
    }
    return totalUniqueConsonants
    }
    
  

// ---RESULTS:
countConsonants("add") //1
countConsonants("abcdefghijklmnopqrstuvwxyz") //1
countConsonants("aeiou") //0
