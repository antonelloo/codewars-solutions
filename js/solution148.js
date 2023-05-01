// ---DESCRIPTION:
/* 

7 kyu --- Unique string characters

In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

*/



//---SOLUTION:
function solve(a, b){
    const notInS2= a.split("").filter(l => !b.includes(l)).join("")
    const notInS1 = b.split("").filter(l => !a.includes(l)).join("")

    return notInS2 + notInS1
  }



// ---RESULTS:
solve("xyabb","xzca")//"ybbzc")
solve("abcd","xyz")//"abcdxyz")
solve("xxx","xzca")//"zca")