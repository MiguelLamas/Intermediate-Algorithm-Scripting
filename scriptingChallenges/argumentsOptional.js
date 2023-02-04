/*
Arguments Optional

- Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.

- For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

- Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
    let array = [...arguments];
    if (array.some(element => typeof element !== 'number')) {
        return undefined;
    } else if (array.length === 1) {
        return function addNum2(num2) {
            return addTogether(array[0], num2)
        }
    } else {
        return array[0] + array[1];
    }
  }
  
  addTogether(2,3);
  
  // 5