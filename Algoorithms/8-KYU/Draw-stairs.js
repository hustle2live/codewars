// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I

// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/

function drawStairs(n) {
   let str = '';
   for (let i = 0; i < n; i++) {
      if (i === n - 1) {
         str += 'I';
      } else {
         str += 'I\n ' + ' '.repeat(i);
      }
   }
   return str;
}




