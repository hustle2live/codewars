// https://www.codewars.com/kata/57061b6fcb7293901a000ac7/train/javascript

function headSmash(array) {
   if (array == false) return 'Gym is empty';
   if (typeof array === 'number') return "This isn't the gym!!";

   const re = /O/g;
   const bs = ' ';
   const newArray = array.map((n) => n.replace(re, bs));

   return newArray;
}
