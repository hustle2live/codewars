const arraySearch = [1, 4, 5, 3, 6, 7, 8, 33, 22, 34, 1, 5, 82, 9, 6, 11, 2];

function linearSearch(list, item) {
   let count = 0;

   for (let i = 0; i < list.length; i++) {
      count++;

      if (list[i] === item) {
         found = true;
         console.log('count ' + count);
         console.log('index ' + i);
         return i;
      }
   }
   return 'item not found';
}

console.log(linearSearch(arraySearch, 9));
