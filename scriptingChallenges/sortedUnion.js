/*
- Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
- In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
- The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
- Check the assertion tests for examples.
*/

// 1. Loop through arrays of arr
// 2. Loop through the elemnts of the arrays
// 3. If the number passed into the Answer Array Variable is not already in there, Push that number into Answer Array.


// use Spread operator to access the whole array
function uniteUnique(...arr) {
    let answer = []; // create a variable with empty array to store answer.
    for (let arrays of arr) { 
        for (let element of arrays) {
            if (!answer.includes(element)) {
                answer.push(element)
            }
        }
     }
    return answer;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);