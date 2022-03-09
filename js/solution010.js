// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"



function repeatStr (n, s) {
    let result = s.repeat(n)
    return result 
  }

  

repeatStr(2, "one") //"oneone"
repeatStr(6, "I") // "IIIIII"