/* 

7 kyu --- String Reordering

The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'

*/




//---SOLUTION:
function sentence(List) {
    const order = List.map(l => Number(Object.keys(l))).sort((a,b) => a-b).map(String)
    return order.map(n => n = List.filter(l => l.hasOwnProperty(n))).map(arr => arr = arr[0]).map(obj => obj = Object.values(obj)[0]).join(" ") 
  }



// ---RESULTS:
let List = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
   ];

sentence(List) //'Vatsan took his dog for a spin')