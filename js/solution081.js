// ---DESCRIPTION:
/* 

Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters

*/



// ---SOLUTION:
function kebabize(str) {
    const newArray = []
    const numbers = "0123456789"
    let finalString
    
    str.split("").map(letter => letter.toLowerCase() === letter ? newArray.push(letter) :  newArray.push("-", letter))
    
    finalString = newArray.filter(l => !numbers.includes(l)).join("").toLowerCase()
    
    return finalString[0] === "-" ? finalString.slice(1) : finalString
    }


    
// ---RESULTS:
kebabize('myCamelCasedString') //'my-camel-cased-string'
kebabize('myCamelHas3Humps') //'my-camel-has-humps'
kebabize('-camel') //'camel'
