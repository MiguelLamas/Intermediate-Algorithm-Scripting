/*
CHALLENGE 2 - Diff Two Arrays
- Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
-  In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2); // concatenate both arrays
    return  newArr.filter(elements => !arr1.includes(elements) || !arr2.includes(elements)); 
    // use filter to create a shallow array to filter elements that pass a test provided by the function. Anything "true" is kept, 
    // anything "false" is removed

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);