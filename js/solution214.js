// ---DESCRIPTION:
/* 

7 kyu --- Longest Vowel Chain

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

*/



//---SOLUTION:
function solve(s){
    let totals = []
    let currentTotal = 0

    s.split("").forEach(l => {
      const vowels = 'aeiou'
      vowels.includes(l) ? currentTotal++ : totals.push(currentTotal) && (currentTotal = 0)
      })
    return Math.max(...totals)
   }



// ---RESULTS:
solve("strengthlessnesses") //1
solve("cuboideonavicuare") //2
solve("chrononhotonthuooaos") //5