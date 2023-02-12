// ---DESCRIPTION:
// 6 kyu --- Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



// ---SOLUTION:
function solution(string) {
    let finalArray = []
    
    for(let i=0; i<string.length; i++){
      string[i] === string[i].toUpperCase() ? finalArray.push(" ", string[i]) : finalArray.push(string[i])
      }
      return finalArray.join("")
    }
  
    

// ---RESULTS:
findMissingLetter(['a','b','c','d','f']) //'e')
findMissingLetter(['O','Q','R','S']) //'P')
findMissingLetter(['g','h','j','k']) //'i')

solution("camelCasing") //"camel Casing"
solution("identifier") // "identifier"
solution("") //""