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
