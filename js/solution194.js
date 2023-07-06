// ---DESCRIPTION:
/* 

7 kyu --- Ch4113ng3

Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

*/



//---SOLUTION:
function nerdify(txt){ 
    return txt.replaceAll(/a/gi, 4).replaceAll(/e/gi, 3).replaceAll('E', 3).replaceAll(/l/g, 1)
    }


  
// ---RESULTS:
nerdify("Seven") // "S3v3n"
nerdify("Los Angeles") // "Los 4ng313s"
nerdify("Seoijselawuue") // "S3oijs314wuu3"