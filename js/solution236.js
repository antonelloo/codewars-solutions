/* 

7 kyu --- Return substring instance count

Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

Usage example:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1

*/


//---SOLUTION:
function solution(fullText, searchText){
    return fullText.split(searchText).length - 1  
   }
   

// ---RESULTS:
solution('abcdeb','b') // 2
solution('abc','b') // 1
solution('abbc','bb') // 1