function bubbleSort(array) {
   let count = 0;
   for (let i = 0; i < array.length; i++) {
      for (let k = i + 1; k < array.length; k++) {
         if (array[i] > array[k]) {
            let tmp = array[i];
            array[i] = array[k];
            array[k] = tmp;
         }
         count += 1;
      }
   }
   console.log('count ' + count);
   return array;
}

function bubbleSortSec(array) {
   let count = 0;
   for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < array.length; k++) {
         if (array[k + 1] < array[k]) {
            let tmp = array[k];
            array[k] = array[k + 1];
            array[k + 1] = tmp;
         }
         count += 1;
      }
   }
   console.log('countSec ' + count);

   return array;
}

// console.log(bubbleSort([44, 12, 12, 8, 45, 13, 3, -2, 56, 31, 13, -63, 2, 55, 1, 23, 92]));
// console.log(bubbleSortSec([44, 12, 12, 8, 45, 13, 3, -2, 56, 31, 13, -63, 2, 55, 1, 23, 92]));

console.log(
   bubbleSort([44, 12, 12, 8, 45, 13, 3, -2, 56, 31, 13, -63, 2, 55, 1, 23, 92]).join(',') ===
      bubbleSortSec([44, 12, 12, 8, 45, 13, 3, -2, 56, 31, 13, -63, 2, 55, 1, 23, 92]).join(',')
);
