// ---DESCRIPTION:
/* 

7 kyu --- Unscrambled Eggs

Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.

*/



//---SOLUTION:
function unscrambleEggs(word){
    return word.replaceAll('egg', "")
    }
  

// ---RESULTS:
unscrambleEggs("ceggodegge heggeregge") // "code here"

unscrambleEggs("FeggUNegg KeggATeggA") //"FUN KATA"