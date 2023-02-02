/*
Smallest Common Multiple

- Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

- The range will be an array of two numbers that will not necessarily be in numerical order.

- For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
divisible by all numbers between 1 and 3. The answer here would be 6.
*/


// 1.  Helper function to find Smallest Common Multiple. Starting with lowNum and highNum
// 2. Any SCM will at least be as high as the highNum
// 3. 

// This helper function will allow us to find the SCM of any two numbers
function findSCM(num1, num2) {
  let lowNum = Math.min(num1, num2);
  let highNum = Math.max(num1, num2);
  for (let i = highNum; i <= highNum * lowNum; i += highNum) {
    if (i % lowNum === 0) {
      return i; 
    }
  }
}
  


function smallestCommons(arr) {
  let lowNum = Math.min(...arr);
  let highNum = Math.max(...arr);
  let SCM = findSCM(...arr)
  for (let j = lowNum; j <= highNum; j++) {
    if (SCM % j !== 0) {
      SCM = findSCM(SCM, j)
    }
  }
  return SCM;
  }
  
  smallestCommons([1,5]);