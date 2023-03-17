// ---DESCRIPTION:
/* 

6 kyu --- Data Reverse

A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/



  //---SOLUTION#1(Refactored):
  function dataReverse(data){
    const updatedData = [];
    while(data.length){
        updatedData.push(data.splice(-8))
    }
    return updatedData.flat();
}

//---SOLUTION#2:

function dataReverse(data) {
    const updatedOne = []
    data.map((number, index) => (index+1) % 8 === 0 ? updatedOne.push(number,"-") : updatedOne.push(number))
    return updatedOne.join("").split("-").reverse().join("").split("").map(Number)
  }
  


    
// ---RESULTS:
dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]) 
//[1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]