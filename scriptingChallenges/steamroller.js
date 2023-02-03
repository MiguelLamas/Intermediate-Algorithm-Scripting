/*
Steamroller -

Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    let answer = [].concat(...arr)
    return answer.some(Array.isArray) ? steamrollArray(answer) : answer;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]); // [ 1, 2, 3, 4 ]