let counter = 0;

function quickSort(array) {
   if (array.length < 2) return array;

   const target = array[0];
   const less = [];
   const more = [];

   for (let i = 1; i < array.length; i++) {
      if (array[i] <= target) less.push(array[i]);
      else more.push(array[i]);
      counter++;
   }

   return [...quickSort(less), target, ...quickSort(more)];
}

console.log(quickSort([44, 12, 12, 8, 45, 13, 3, -2, 56, 31, 13, -63, 2, 55, 1, 23, 92]));
console.log(counter);
