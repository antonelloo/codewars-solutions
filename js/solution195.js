// ---DESCRIPTION:
/* 

7 kyu --- Ciphers #1 - The 01 Cipher

Ciphers #1 - The 01 Cipher
This cipher doesn't exist, I just created it by myself. It can't actually be used, as there isn't a way to decode it. It's a hash. Multiple sentences may also have the same result.

How this cipher works
It looks at the letter, and sees it's index in the alphabet, the alphabet being a-z, if you didn't know. If it is odd, it is replaced with 1, if it's even, its replaced with 0. Note that the index should start from 0. Also, if the character isn't a letter, it remains the same.

Example
encode("Hello World!"); // => "10110 00111!"
This is because H's index is 7, which is odd, so it is replaced by 1, and so on.

Have fun (en)coding!

*/



//---SOLUTION:
function encode(plaintext){
const alpha = 'abcdefghijklmnopqrstuvwxyz'
   
return plaintext.toLowerCase().split("").map(e => alpha.includes(e) && alpha.indexOf(e) % 2 === 0 ? 0 : alpha.includes(e) && alpha.indexOf(e) % 2 !== 0 ? 1 : e).join("")
}


  
// ---RESULTS:
encode("Hello World!") //"10110 00111!"