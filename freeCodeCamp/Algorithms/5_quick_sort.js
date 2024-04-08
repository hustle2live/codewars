let counter = 0;

function quickSort(array) {
   if (array.length < 2) return array;
   const idxTarget = Math.floor(array.length / 2);
   const target = array[idxTarget];
   const less = [];
   const more = [];

   for (let i = 0; i < array.length; i++) {
      counter++;

      if (i === idxTarget) continue;
      array[i] <= target ? less.push(array[i]) : more.push(array[i]);
   }

   return [...quickSort(less), target, ...quickSort(more)];
}

console.log(quickSort([44, 12, 12, 8, 45, 13, 3, -2, 56, 31, 13, -63, 2, 55, 1, 23, 92]));
console.log(counter);
