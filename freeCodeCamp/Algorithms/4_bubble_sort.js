function bubbleSort(array) {
   for (let i = 0; i < array.length; i++) {
      for (let k = i + 1; k < array.length; k++) {
         if (array[i] > array[k]) {
            let tmp = array[i];
            array[i] = array[k];
            array[k] = tmp;
         }
      }
   }

   return array;
}

console.log(bubbleSort([44, 12, 12, 8, 45, 13, 3, -2, 56, 31, 13, -63, 2, 55, 1, 23, 92]));
console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
