// ---DESCRIPTION:
/* 

7 kyu --- Sort Out The Men From Boys

Scenario
Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd!alt!alt
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
Notes
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists .!alt
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

Input >> Output Examples:
menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 
Explanation:
Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
Explanation:
Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in descending order { -99 }

Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final array/list .

menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
Explanation:
Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }

Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list .
*/


//---SOLUTION:

function menFromBoys(arr){
    const men = Array.from(new Set(arr)).filter(man => man % 2 === 0).sort((a,b) => a-b)
    const boys = Array.from(new Set(arr)).filter(boys => boys % 2 !== 0).sort((a,b) => b-a)
    return [...men, ...boys]
  }
  
    
// ---RESULTS:
menFromBoys([2,15,17,15,2,10,10,17,1,1])//[2,10,17,15,1]
menFromBoys([-32,-39,-35,-41]) //[-32,-35,-39,-41])
menFromBoys([-64,-71,-63,-66,-65]) //[-66,-64,-63,-65,-71]