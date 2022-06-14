// DESCRIPTION:

// Make a function that returns the value multiplied by 50 and increased by 6. 
// If the value entered is a string it should return "Error".





//SOLUTION #1

function problem(x){
    if(typeof(x) === "number") {
      return x * 50 + 6
  } else {
    return "Error"
  }}



problem(1) //56
problem(5) //256
problem("") //Error