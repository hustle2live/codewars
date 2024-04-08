// function selectionSort2(arr) {
//    let tmp;
//    let min = arr[0];
//    let minIdx = 0;

//    for (let i = 0; i < arr.length; i++) {
//       min = arr[i];
//       minIdx = i;

//       for (let k = i; k < arr.length; k++) {
//          if (arr[k] < min) {
//             min = arr[k];
//             minIdx = k;
//          }
//       }
//       tmp = arr[i];
//       arr[i] = min;
//       arr[minIdx] = tmp;
//    }
//    return arr;
// }

function selectionSort(array) {
   for (let i = 0; i < array.length; i++) {
      let minIdx = i;

      for (let k = i; k < array.length; k++) {
         if (array[k] < array[minIdx]) {
            minIdx = k;
         }
      }
      let tmp = array[i];
      array[i] = array[minIdx];
      array[minIdx] = tmp;
   }

   return array;
}

console.log(selectionSort([44, 12, 12, 8, 45, 13, 3, -2, 56, 31, 13, -63, 2, 55, 1, 23, 92]));
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));


