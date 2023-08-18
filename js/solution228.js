/* 

7 kyu --- Battle of the characters

Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.

Examples:
      * "ONE", "TWO"  -> "TWO"`
      * "ONE", "NEO"  -> "Tie!"

*/



//---SOLUTION:
function battle(x, y) {
    const alpha ='-ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const wordValue = (word) => word.split("").map((l) => l = alpha.indexOf(l)).reduce((t,v) => t + v, 0)
    return wordValue(x) > wordValue(y) ? x : wordValue(x) < wordValue(y) ? y : 'Tie!'
  }
  
  

// ---RESULTS:
battle("ONE", "TWO") // "TWO"
battle("ONE", "NEO") // "Tie!"
battle("FOUR", "FIVE") // "FOUR"