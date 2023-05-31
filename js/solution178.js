// ---DESCRIPTION:
/* 

7 kyu --- Most Likely

Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

*/



//---SOLUTION:
function mostLikely(arg1, arg2){
    const value = (n) => n.split(":").reduce((t, v) => +t/+v)
    return value(arg1) > value(arg2)
}


// ---RESULTS:
mostLikely('1:3','1:2') //false
mostLikely('1:3','1:4') //true
mostLikely('1:9','1:2') //false
