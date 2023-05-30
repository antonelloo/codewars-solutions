// ---DESCRIPTION:
/* 

7 kyu --- Deutschstunde

Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

each noun containing less than 2 vowels has the article "das"
each noun containing 2/3 vowels has the article "die"
each noun containing more than 3 vowels has the article "der"
Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

(This Kata is a joke, there is no such grammar rule!)

*/



//---SOLUTION:
function derDieDas(wort){
    if(wort === ""){
      return `das `
    }else{
      const totalVowels = wort.split("").map(e => "aeiouäöü".includes(e.toLowerCase()) ? e = 1 : 0).reduce((total, n) => total + n)
      return totalVowels < 2 ? `das ${wort}` : totalVowels === 2 || totalVowels === 3 ? `die ${wort}` : `der ${wort}`
    }
  }
  

// ---RESULTS:
derDieDas('Ofenkartoffel') // 'der Ofenkartoffel'
derDieDas('Fisch') // 'das Fisch'
derDieDas('Knödel') // 'die Knödel'