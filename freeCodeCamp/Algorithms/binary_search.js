// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-binary-search

function binarySearch(list, item) {
   let arrPath = [];
   let found = false;
   let low = 0;
   let high = list.length - 1;

   while (found === false && low <= high) {
      const mid = Math.floor((low + high) / 2);
      const guess = list[mid];

      const checkEquality = (el = guess) => el === item;

      if (checkEquality()) {
         found = true;
      } else if (guess > item) {
         high = mid - 1;
      } else {
         low = mid + 1;
      }

      arrPath.push(guess);
   }

   return found ? arrPath : 'Value Not Found';
}

// binarySearch should be a function.
// Passed:binarySearch(testArray, 0) should return [13, 5, 2, 0].
// Passed:binarySearch(testArray, 1) should return [13, 5, 2, 0, 1].
// Passed:binarySearch(testArray, 2) should return [13, 5, 2].
// Passed:binarySearch(testArray, 6) should return the string Value Not Found.
// Passed:binarySearch(testArray, 11) should return [13, 5, 10, 11].
// Passed:binarySearch(testArray, 13) should return [13].
// Passed:binarySearch(testArray, 70) should return [13, 19, 22, 49, 70].
