function mergeSort(array) {
   function merge(arrFirst, mid, arrSecond) {
      return [...mergeSort(arrFirst), mid, ...mergeSort(arrSecond)];
   }

   function mergeSort(arr) {
      if (arr.length <= 1) return arr;
      else {
         const left = [];
         const right = [];
         const half = Math.floor(arr.length / 2);
         for (let n = 0; n < arr.length; n++) {
            if (n === half) continue;
            if (arr[n] < arr[half]) left.push(arr[n]);
            else right.push(arr[n]);
         }
         return merge(left, arr[half], right);
      }
   }

   return mergeSort(array);
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
