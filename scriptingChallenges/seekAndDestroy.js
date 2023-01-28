/*
CHALLENGE 3 - SEEK & DESTROY

- You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
- Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

*/


function destroyer(arr, ...destroy) { // apply another parameter and turn it into an array using the Spread Operator
    return arr.filter(element => !destroy.includes(element))
    /* use the filter method (a loop and an IF Statement rolled into one) to check all elements in
    the array. keep the elements that are not included in the destroy array, get rid of the rest */
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);