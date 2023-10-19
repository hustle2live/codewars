const arrA = [['dsd', 'ds'], 'dsfsf', 12344];
const arrB = [
   Symbol,
   'asddds',
   function ddd() {
      console.log('ddd is done');
   },
   '2234',
   { name: 'john', surname: 'picket' },
   null,
   undefined,
   0,
   ,
   Symbol('x')
];

// console.log(arrA);
// console.log(arrB);

// console.log(arrB);

function createStep(a = 0) {
   return function (b = 1) {
      a = a + b;
      console.log('step() a = ' + a);
   };
}

const step1 = createStep(3);


console.log(step1(2)); // a = 1
console.log(step1(4)); // a = 2
console.log(step1(3)); // a =
console.log(step1(0)); // a =
console.log(step1(-1)); // a =
