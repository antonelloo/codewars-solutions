// ---DESCRIPTION:
/* 

7 kyu --- Count Consonants

Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/



//---SOLUTION:
function consonantCount(str) {
    const stringArray = str.toLowerCase().split("")
    const consonants = 'bcdfghjklmnpqrstvwxyz'
    let total = 0
    
    for(let i=0; i<stringArray.length; i++){
      if(consonants.includes(stringArray[i])){
        total += 1
      }
    }
    return total 
  }
    

// ---RESULTS:
consonantCount('bcdfghjklmnpqrstvwxyz')// 21
consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ') //42
consonantCount('bc')// 2)