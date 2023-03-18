// ---DESCRIPTION:
/* 

6 kyu --- Write Number in Expanded Form

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/


//---SOLUTION:

function expandedForm(number){
    const numArray = String(number).split("")
    const result = []
    let num = '0'
    
    while(numArray.length){
        result.unshift((numArray.splice(-1)+num).slice(0,-1))
        num+= "0"
    }
    return result.filter(number => number[0] !== "0").join(" + ")
    }
    
// ---RESULTS:
expandedForm(12) // '10 + 2'
expandedForm(42) // '40 + 2'
expandedForm(70304) // '70000 + 300 + 4'