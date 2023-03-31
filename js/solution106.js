// ---DESCRIPTION:
/* 

7 kyu --- Sort by Last Char

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.


*/


//---SOLUTION:
function last(x){
    return x.split(" ").sort((a,b) => a[a.length-1].localeCompare(b[b.length-1]))
}
    
    
// ---RESULTS:
last('man i need a taxi up to ubud') //['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano') //['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak')// ['take', 'me', 'semynak', 'to']