// ---DESCRIPTION:
/* 
7 kyu --- Decreasing Inputs

This kata is all about adding numbers.

You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

  add(3,4,6); 
  returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
  
  Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.
*/



//---SOLUTION:
function add(...theArgs){
    return Math.round(theArgs.map((n,i) => n / (i+1)).reduce((total, v) => total + v, 0))
    }
    
    
    
// ---RESULTS:
add(); //=> 0
add(1,2,3); //=> 3
add(1,4,-6,20); //=> 6
