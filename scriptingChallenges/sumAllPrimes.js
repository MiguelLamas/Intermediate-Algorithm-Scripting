/*
- A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
- For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

// 1. Figure out which number between 2 (which is a prime number) and the number parsed are prime.
// 2. Loop through with a helper function which lists all numbers between 2 and "num"
// 3. Check if number can be divided by the number we are looping through to determine whether it's a prime number
// 4. 

function sumPrimes(num) {
    //helper function to loop though and make a list in this instance between numbers 2 to 9. 
    function checkPrimes(number) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return false 
        } return true
    }
    let answer = 0;
    for (let j = 2; j <= num; j++) {
        if (checkPrimes(j)) {
            answer += j;
        }
    }
    return answer;
  }
  
  sumPrimes(10);