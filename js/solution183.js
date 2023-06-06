// ---DESCRIPTION:
/* 

7 kyu --- Even or Odd - Which is Greater?

Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"

*/



//---SOLUTION:
function evenOrOdd(str) {
    const total = (t) => str.split("").map(Number).filter(e => e % 2 === t).reduce((total, number) => total + number, 0)
    return total(0) > total(1) ? "Even is greater than Odd" : total(0) < total(1) ? "Odd is greater than Even" : "Even and Odd are the same"
}



// ---RESULTS:
evenOrOdd('12') //'Even is greater than Odd'
evenOrOdd('123') // 'Odd is greater than Even'
evenOrOdd('112') // 'Even and Odd are the same'