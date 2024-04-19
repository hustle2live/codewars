let counter = 0;

function permAlone(str) {
   const arr = [];

   const swapInPlace = (swapArr, idxA, idxB) => {
      const temp = swapArr[idxA];
      swapArr[idxA] = swapArr[idxB];
      swapArr[idxB] = temp;
   };

   const generate = (n, heapArr) => {
      if (n === 1) {
         arr.push([...heapArr].join(''));
         return;
      }

      generate(n - 1, heapArr);

      for (let i = 0; i < n - 1; i++) {
         if (n % 2 === 0) {
            swapInPlace(heapArr, i, n - 1);
         } else {
            swapInPlace(heapArr, 0, n - 1);
         }
         generate(n - 1, heapArr);
      }
   };

   generate(str.length, [...str]);

   const re = /([a-z])\1/gim;
   const filtered = arr.filter((str) => !str.match(re));

   return filtered.length;
}

console.log(permAlone('aba'));
