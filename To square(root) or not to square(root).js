// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

function squareOrSquareRoot(array) {
   return array.map((n) => (n % Math.sqrt(n) === 0 ? Math.sqrt(n) : n ** 2));
}
