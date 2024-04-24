function sym(args) {
   if (arguments.length === 1) {
      return arguments[0];
   }

   console.log(arguments);
   let [arr1, arr2, ...arr3] = arguments;

   let symSetArr = [];

   while (arr1.length > 0) {
      const el = arr1.shift();

      if (!arr2.includes(el)) {
         symSetArr.push(el);
      } else arr2 = arr2.filter((item) => item !== el);
   }

   //    symSetArr = [...symSetArr, ...arr2];
   symSetArr.push(...arr2);

   if (arr3) return sym(symSetArr, ...arr3);

   return symSetArr;
}

// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
// console.log(sym([1, 2, 3], [5, 2, 1, 4], [11, 333,], [533, 22,]));
