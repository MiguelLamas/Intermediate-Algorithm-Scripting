// 1. Sum All Numbers in a Range

/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    let maxNum = Math.max(...arr); // find maxNum using ...spread operator
    let minNum = Math.min(...arr); // find minNum
    let sum = 0; // create a variable to store sum as we loop through array
    for (let i = minNum; i <= maxNum; i++) {  // initialisation at minNum in arr, keep incrementing and adding to sum each iteration.
      sum += i
    }
    return sum;
  }
  
 sumAll([1, 4]);
