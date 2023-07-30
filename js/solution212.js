// ---DESCRIPTION:
/* 

7 kyu --- Disarium Number (Special Numbers Series #3)

Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series

Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"

*/




//---SOLUTION:
function disariumNumber(n){
    return n === String(n).split("")
                          .map((e, i) => Math.pow(+e, i+1))
                          .reduce((t,v) => t + v, 0) ? "Disarium !!" : "Not !!"
}



// ---RESULTS:
disariumNumber(564) //"Not !!"
disariumNumber(1024) //"Not !!"
disariumNumber(135) //"Disarium !!"