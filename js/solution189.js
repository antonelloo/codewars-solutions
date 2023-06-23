// ---DESCRIPTION:
/* 

7 kyu --- SevenAte9

Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

*/




//---SOLUTION:
function sevenAte9(str) {
    let newStr = ""
    for(let i=0; i<str.length; i++){
      str[i] === '9' && str[i-1] === '7' && str[i+1] === '7' ? newStr = newStr + '' : newStr = newStr + str[i]
    }
    return newStr
  }



// ---RESULTS:
sevenAte9('797') // '77'
sevenAte9('7979797') // '7777'
sevenAte9('165561786121789797') // '16556178612178977'