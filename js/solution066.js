// Grasshopper - Combine strings

// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'


//SOLUTION 

function combineNames(firstName, lastName){
    return firstName + " " + lastName
  }


  
  console.log(combineNames('James', 'Stevens'))// 'James Stevens'
  console.log(combineNames('John', 'Peters'))// 'John Peters'
  console.log(combineNames('Elisa', 'Smith'))// 'Elisa Smith'

