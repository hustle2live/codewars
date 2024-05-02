const a = false;

function one(el) {
   secondOne(el);
}

function secondOne(el) {
   thirdOne(el);
}
function thirdOne(elem) {
   if (typeof elem !== 'Number') {
      throw new Error('This is Not a Number');
   }
   console.log(typeof elem);
}

try {
   console.log('start');

   thirdOne(a);
   //    one(a);

   console.log('code after error');
} catch (error) {
   console.log(error.stack);
} finally {
   console.log("and that's all");
}

// function trace() {
//    try {
//       throw new Error('Моя ошибка');
//    } catch (e) {
//       alert(e.stack);
//    }
// }

// function b() {
//    trace();
// }

// function a() {
//    b(3, 4, '\n\n', undefined, {});
// }

// a('первый вызов, первый аргумент');
let count = 0;

function onclickSpan(e) {
   count++;
   console.log('onclickSpan');
   console.log('count ' + count);

   e.stopPropagation();
}

function onclickButton(e) {
   count++;
   console.log('onclickButton');
   console.log('count ' + count);
}

document.querySelector('.btn span').addEventListener('click', onclickSpan);
document.querySelector('.btn').addEventListener('click', onclickButton);
