/* Sum All Odd Fibonacci Numbers

- Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

- The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

- For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
   let fiboNums = [1,1];
   let nextNum = fiboNums[fiboNums.length-2] + fiboNums[fiboNums.length-1];
    while (nextNum <= num) {
        fiboNums.push(nextNum);
        nextNum = fiboNums[fiboNums.length-2] + fiboNums[fiboNums.length-1];
    }
    return fiboNums.filter(element => element % 2 !== 0).reduce((a,b) => a+b)
  }
  
  sumFibs(4);