// https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript

// Input/Output
// [input] integer year
// 1000 ≤ year ≤ 9000

// [output] an integer
// the minimum year number that is strictly larger than the input number year and all its digits are distinct.

const distinctDigitYear = (year) => {
   year++;

   const set = (n) => new Set(JSON.stringify(n).split(''));
   const arr = (n) => Array.from(String(n), Number);

   while (set(year).size !== arr(year).length) {
      year++;
   }

   return year;
};

// console.log(JSON.stringify(1987).split(''));
// console.log(new Set(JSON.stringify(1987).split('')).size);

const distinctDigitYear2 = (year) => {
   year++;
   while (new Set(JSON.stringify(year).split('')).size !== Array.from(String(year), Number).length) {
      year++;
   }

   return year;
};

const distinctDigitYear3 = (year) =>
   new Set(JSON.stringify(++year).split('')).size !== Array.from(String(year), Number).length
      ? distinctDigitYear(year)
      : year;

const distinctDigitYear4 = (year) =>
   new Set([...(++year + '')]).size !== [...(year + '')].length ? distinctDigitYear4(year) : year;

// distinctDigitYear4(1987);
// console.log(distinctDigitYear4(1987));
