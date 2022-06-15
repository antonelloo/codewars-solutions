// DESCRIPTION:
// Create a combat function that takes the player's current health and the amount of damage recieved, 
//and returns the player's new health. Health can't be less than 0.




//SOLUTION

function combat(health, damage) {
    const updatedHealth = health - damage 
    return updatedHealth > 0 ? updatedHealth : 0
  }


  combat(100, 5) //95)
  combat(92, 8) //84)
  combat(20, 30) //0