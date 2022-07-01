// // DESCRIPTION:

// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"



//SOLUTION 

function whatday(num) { 

    const dayOfWeek = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday"
    }
    
    return num >= 1 && num <= 7 ? dayOfWeek[num] : 'Wrong, please enter a number between 1 and 7'
  
  }


  
  console.log(whatday(5)) //"Thursday"
  console.log(whatday(1)) //"Sunday"
  console.log(whatday(12)) //"Wrong, please enter a number between 1 and 7"
