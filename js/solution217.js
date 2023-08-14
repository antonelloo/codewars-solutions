// ---DESCRIPTION:
/* 

7 kyu --- word values

Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.

Good luck!

*/




//---SOLUTION:
function wordValue(a) {
    const alphabet = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26}
    return a.map(el => el.split("").map(l => alphabet[l] ? l=alphabet[l] : 0).reduce((t, v) => t + v, 0))
            .map((value,index) => value * (index+1) )
}



// ---RESULTS:
wordValue(["codewars","abc","xyz"]) //[88,12,225]
wordValue(["abc abc","abc abc","abc","abc"]) //[12,24,18,24]