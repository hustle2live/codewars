
function insertionSort(array) {
    // first loop in forward direction
    for (let i = 1; i < array.length; i++) {
       const selected = array[i];
       let m;
       // second loop in reverse direction
       for (m = i - 1; m >= 0 && array[m] > selected; m--) {
          array[m + 1] = array[m];
       }
       array[m + 1] = selected;
    }
    return array;
 }
 
 console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
 console.log(insertionSort([5, 4, 33, 2, 8]));
 
 function insertionSortInsert(array) {
    // first loop in forward direction
    for (let i = 1; i < array.length; i++) {
       const selected = array[i];
       let potentialIdx = null;
 
       // second loop in reverse direction
       for (let m = i - 1; m >= -1; m--) {
          if (m === -1) {
             if (potentialIdx !== null) {
                const removed = array.splice(i, 1)[0];
                array.unshift(removed);
             }
             break;
          }
 
          if (selected < array[m]) {
             potentialIdx = m;
          } else if (selected >= array[m]) {
             if (potentialIdx) {
                const removed = array.splice(i, 1)[0];
                array.splice(potentialIdx, 0, removed);
                break;
             }
          }
       }
    }
    return array;
 }