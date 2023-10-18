// Count characters in your string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// method 1
function count1(str) {
   const obj = {};
   for (const key of str) obj[key] = Object.keys(obj).includes(key) ? ++obj[key] : 1;
   return obj;
}

// method 2
const count = (str) => [...str].reduce((obj, key) => (obj[key] = obj.hasOwnProperty(key) ? ++obj[key] : 1) && obj, {});







