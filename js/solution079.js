// ---DESCRIPTION:

/* 

Complete the solution so that it splits the string into pairs of two 
characters. If the string contains an odd number of characters then it 
should replace the missing second character of the final pair with an 
underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/



// ---SOLUTION:
function solution(string){
  const updatedString = string.length % 2 !==0 ? string + "_" : string
  let newArray = []

    for(let i=0; i<updatedString.length; i+=2){
      newArray.push(updatedString[i]+updatedString[i+1])
    }
    return newArray
}

// ---RESULTS:
solution("abcdef") //["ab", "cd", "ef"]
solution("abcdefg")// ["ab", "cd", "ef", "g_"]
solution("") //[]