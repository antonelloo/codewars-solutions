// DESCRIPTION:
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6


// --Solution--

function calc(string){    
    let total1 = ""
      for(let i=0; i<string.length;i++){
        total1 += string.charCodeAt([i])
      }

    const total2 = total1.replaceAll('7', '1')
    
    const sum = (totalString) => totalString.split("").reduce((total, value) => total + +value, 0)
    
    return sum(total1) - sum(total2)
  }


// --Results--
calc('ifkhchlhfd') //6 
calc('aaaaaddddr') //30
calc('jfmgklf8hglbe')//6  
calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') //96