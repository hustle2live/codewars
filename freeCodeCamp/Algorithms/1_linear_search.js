const arraySearch = [1, 4, 5, 3, 6, 7, 8, 33, 22, 34, 1, 5, 82, 9, 6, 11, 2];

let count = 0;

function linearSearch(list, item) {
   let found = null;

   for (const element of list) {
      count++;

      if (element === item) {
         found = element;
         break;
      }
   }

   return found || 'item not found';
}

console.log(linearSearch(arraySearch, 22));
console.log('count ' + count);
