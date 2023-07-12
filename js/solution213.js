// ---DESCRIPTION:
/* 

7 kyu --- Colour Association

Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

*/




//---SOLUTION#1(refactored):
function colourAssociation(array){
    return array.map(([c,i]) => ({[c]:i}))
  }

//---SOLUTION#2:
function colourAssociation(array){
    return array.map(arr => {
      let obj = {}
      obj[`${arr[0]}`] = arr[1]
      return obj
    })
  }




// ---RESULTS:
colourAssociation([["white", "goodness"], ["blue", "tranquility"]]) 
// [{white:"goodness"},{blue:"tranquility"}]

colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]])
// [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]