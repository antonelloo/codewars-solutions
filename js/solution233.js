/* 

7 kyu --- Selective fear of numbers

I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

*/



//---SOLUTION:
function AmIAfraid(day, num){
  
    const dayOfWeek = {
      Monday: function(num){
        return num === 12
      },
      Tuesday: function(num){
        return num > 95  
      },
      Wednesday: function(num){
        return num === 34 
      },
      Thursday: function(num){
        return num === 0  
      },
      Friday: function(num){
        return num % 2 === 0
      },
      Saturday: function(num){
        return num === 56 
      },
      Sunday: function(num){
        return num === 666 || num ===-666
      }
    }

    return dayOfWeek[day](num)
  }



// ---RESULTS:
AmIAfraid("Sunday", -666) // true
AmIAfraid("Tuesday", 2) // false
AmIAfraid("Tuesday", 965) // true