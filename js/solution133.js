// ---DESCRIPTION:
/* 

7 kyu --- How many arguments

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4

*/



//---SOLUTION:
function args_count(...data){
    return data.length
}
    
// ---RESULTS:
args_count(1, 2)// 2
args_count()// 0
args_count('A', 'B', 'C')// 3