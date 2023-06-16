// ---DESCRIPTION:
/* 

7 kyu --- Day of the year

Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1
The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

The year can be evenly divided by 4;
If the year can be evenly divided by 100, it is NOT a leap year, unless;
The year is also evenly divisible by 400. Then it is a leap year.
*/



//---SOLUTION #1 (refactored):
function toDayOfYear(arr) {
    const year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if((arr[2] % 4 === 0 && arr[2] % 100 !== 0) || arr[2] % 400 === 0){
      year[1] = 29
    }
    return year.slice(0, arr[1]-1).reduce((total, value) => total + value, 0) + arr[0]
  }

//---SOLUTION #2:
  function toDayOfYear(arr) {
    const year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
    if(arr[2] % 100 === 0 && arr[2] % 400 === 0){
        year[1] = 29
    }else if(arr[2] % 100 === 0 && arr[2] % 400 !== 0){
        year[1] = 28
    }else if(arr[2] % 4 === 0){
        year[1] = 29
    }  
    return year.slice(0, arr[1]-1).reduce((total, value) => total + value, 0) + arr[0]
  }


// ---RESULTS:
toDayOfYear([1, 5, 3000]) // 121
toDayOfYear([14, 3, 1066]) // 73
toDayOfYear([5, 11, 1604]) // 310