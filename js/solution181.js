// ---DESCRIPTION:
/* 

6 kyu --- Reverse Vowels In A String

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!

*/



//---SOLUTION:
function reverseVowels(str) {
    const vowels = str.split("").filter(w => 'AEIOUaeiou'.includes(w))
    return str.split("").map(l => 'AEIOUaeiou'.includes(l) ? l = vowels.pop() : l).join("")
    }



// ---RESULTS:
reverseVowels("Hello!") //"Holle!
reverseVowels("Tomatoes") // "Temotaos"
reverseVowels("Reverse Vowels In A String") //"RivArsI Vewols en e Streng"