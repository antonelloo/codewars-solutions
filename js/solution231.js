/* 

7 kyu --- Covfefe

Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

*/


//---SOLUTION #2 (refactored):
function covfefe(str){
    const replaced = str.replaceAll('coverage', 'covfefe')
    return str === replaced ? `${replaced} covfefe` : replaced
  }
//---SOLUTION #1:
function covfefe(str){
    if(str.includes('covfefe')){
      return `${str} covfefe`
    }else{
      const replaced = str.replaceAll('coverage', 'covfefe')
      return replaced.includes('covfefe') ? replaced : `${replaced} covfefe`
    }
  }


// ---RESULTS:
covfefe("coverage coverage") ///"covfefe covfefe"
covfefe("nothing") //"nothing covfefe"
covfefe("double space ") //"double space  covfefe"