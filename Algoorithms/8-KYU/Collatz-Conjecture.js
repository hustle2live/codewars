// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// Kata url
// https://www.codewars.com/kata/577a6e90d48e51c55e000217/



const hotpo1 = (n, i = 0) => {
   if (n === 0 || n === 1) return i;
   const even = n % 2 === 0;
   n = even ? n / 2 : n * 3 + 1;
   i++;
   return hotpo(n, i);
};


// second method
const hotpo = (n, i = 0) => (n <= 1 ? i : !(n % 2) ? hotpo(n / 2, ++i) : hotpo(n * 3 + 1, ++i));



// test

// console.log(hotpo(0) === 0);
// console.log(hotpo(1) === 0);
// console.log(hotpo(5) === 5);
// console.log(hotpo(6) === 8);
// console.log(hotpo(23) === 15);
