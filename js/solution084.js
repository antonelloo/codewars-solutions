// ---DESCRIPTION:
/* 

6 kyu --- Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/


// ---SOLUTION:

function count (string) {  
    let result = {}
    string.split("").forEach(letter => result.hasOwnProperty(letter) ? result[letter]++ : result[letter] = 1)
    return result;
  }

    
// ---RESULTS:
count("aba") //{ a: 2, b: 1 } 
count("") //{}  
count("abbccd") //{ a: 1, b: 2, c:2, d:1 } 