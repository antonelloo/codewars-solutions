/* 

7 kyu --- Converting integer to currency format

Write a function that takes an integer in input and outputs a string with currency format.

Integer in currency format is expressed by a string of number where every three characters are separated by comma.

For example:

123456 --> "123,456"
Input will always be an positive integer, so don't worry about type checking or negative/float values.

*/



//---SOLUTION:
function toCurrency(price){
    return price.toLocaleString()
  }
  
  

// ---RESULTS:
toCurrency(price2) // "1,234"
toCurrency(price3) // "123"
toCurrency(price4) // "123,456,789,012"