// ---DESCRIPTION:
/* 

7 kyu --- Divide and Conquer

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

*/



//---SOLUTION:
function divCon(x){
    return x.reduce((total, element) => typeof element === 'number' ? total + element : total - Number(element), 0)
    }
  

    
// ---RESULTS:
divCon([9, 3, '7', '3'])// 2
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])// 14 
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])// 13)