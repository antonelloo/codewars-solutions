// ---DESCRIPTION:
/* 

7 kyu --- Sorting Arrays

Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the arrays will start with a unique letter so there will only be a single match for each element.

*/



//---SOLUTION:
function sortArray(a1, a2) {
    const sorted = []
    
    for(let i=0; i<a1.length; i++){
      for(let j=0; j<a2.length; j++){
        if(a2[j].startsWith(a1[i][0])){ 
          sorted.push(a2[j])
        }
      }
    }
    return sorted
    }

  
// ---RESULTS:
var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
sortArray(a1, a2) // ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
sortArray(a1, a2) // ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

var a1 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
var a2 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
sortArray(a1, a2) //['narwhal', 'llama', 'sloth', 'tortoise', 'raven']