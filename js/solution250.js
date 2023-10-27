/* 
7 kyu --- Stones on the Table

There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colors.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9
*/



//---SOLUTION:
function solve(stones) {
    return stones.split("")
                  .map((e,i) => e === stones[i+1] ? 1 : 0)
                  .reduce((t,v) => t + v, 0)
  }

  
// ---RESULTS:
solve("RRGGBB") // 3
solve("RGBRGB") // 0 
solve("BGRBBGGBRRR") // 4  