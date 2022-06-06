// Write a function that returns the total surface area and volume of a box as an array: [area, volume]




//SOLUTION

function getSize(width, height, depth) {
    let surfaceAreaVolume = []
    let totalSurfaceArea = (2 * depth * width) + (2 * depth * height) + (2 * width * height) 
    let totalVolume = width * height * depth 
    return surfaceAreaVolume = [totalSurfaceArea, totalVolume]
  }
  
  
  getSize(4, 2, 6) //[88, 48]
  getSize(10, 10, 10) //[600, 1000]