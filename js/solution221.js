// ---DESCRIPTION:
/* 

7 kyu --- Average Scores

Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

The array will never be empty.

*/



//---SOLUTION:
function average(scores) {
    return Math.round(scores.reduce((total, v) => total + v, 0) / scores.length)
  }

    

// ---RESULTS:
scores = [49,3,5,300,7];
average(scores) // 73

scores = [90,98,89,100,100,86,94];
average(scores) // 94