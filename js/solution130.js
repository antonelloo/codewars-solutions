// ---DESCRIPTION:
/* 

6 kyu --- Find Cracker.

Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]],
["name2", 140, ["B", "A", "A", "A"]],
["name3", 200, ["B", "A", "A", "C"]]
];
The scores for each grade is:

A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points
If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
];

return ["name1", "name3"];

*/



//---SOLUTION:
function findHack(arr) {
    const hacked = []
  
    for(let i=0; i<arr.length; i++){
      let highScore = arr[i][2].length >=5 && arr[i][2].every(el => el === "A" || el === "B") ? 20 : 0
      let total = arr[i][2].map(g => g ==="A" ? 30 : g ==="B" ? 20 : g === "C" ? 10 : g === "D" ? 5 : 0).reduce((total, grade) => total + grade, 0) + highScore
      total > 200 ? total = 200 : null 
      
      if(arr[i][1] !== total){
        hacked.push(arr[i][0])
      }
    }
    return hacked
  }

    
// ---RESULTS:
findHack(
    [
    ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A","A"]],
    ["name4", 140, ["B", "A", "A", "C", "A"]]
    ])
    
//["name2","name4"]