// ---DESCRIPTION:
/* 

7 kyu --- Factorial

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

*/



//---SOLUTION:
function factorial(n){
    let number = 1
    let total = 1
    while(number <= n){
        total = total * number
        number++  
    }
    return total
  }

  

// ---RESULTS:
factorial(4)// 24
factorial(7)// 5040
factorial(17)// 355687428096000