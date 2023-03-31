// ---DESCRIPTION:
/* 

7 kyu --- Basic calculator 

Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).
*/


//---SOLUTION:
function calculate(num1, op, num2){
    let operation = {
    "+" : num1 + num2,
    "-" : num1 - num2,
    "/" : num1 / num2,
    "*" : num1 * num2
    }

    return (op === "/" && num2 === 0) || (operation[op] === undefined) ? null : operation[op]
}
    
    
// ---RESULTS:
calculate(3.2,"+", 8)// 11.2
calculate(3.2,"-", 8)// -4.8
calculate(-3,"/", 0)// null