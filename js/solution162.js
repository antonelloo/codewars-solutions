// ---DESCRIPTION:
/* 

7 kyu --- Insert dashes

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

*/



//---SOLUTION:
function insertDash(n) {
let dashed = []
const nums = String(n).split("").map(Number)

for(let i=0; i<nums.length; i++){
    if(nums[i] % 2 !== 0 && nums[i+1] % 2 !==0 && nums[i+1] !== undefined){
        dashed.push(nums[i] + "-")
    }else{
        dashed.push(nums[i])
    }}
    return dashed.map(String).join('') 
 }



// ---RESULTS:
insertDash(454793) //'4547-9-3'
insertDash(123456) //'123456'
insertDash(1003567) //'1003-567'