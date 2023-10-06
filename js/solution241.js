/* 

7 kyu --- Split in Parts

The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive

*/




//---SOLUTION:
var splitInParts = function(s, partLength){
    const array = s.split("")
    const result = []

    while(array.length > 0){
      result.push(array.splice(0,partLength).join(""))
    }
    
    return result.join(" ")
    }
  



// ---RESULTS:
splitInParts("supercalifragilisticexpialidocious", 3) // "sup erc ali fra gil ist ice xpi ali doc iou s"
splitInParts("HelloKata", 1) // "H e l l o K a t a"
splitInParts("HelloKata", 9) //"HelloKata"