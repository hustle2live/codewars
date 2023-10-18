// https://www.codewars.com/kata/59727e04f6a02d0cde00001a/solutions/javascript


function sortLetters(array) {
   //your code here

   const vowels = 'aeiou';
   const vowelsArr = [];
   const restArr = [];

   for (const arr of array) {
      for (let e of arr) {
         if (typeof e !== 'number') {
            if (vowels.includes(e.toLowerCase())) vowelsArr.push(e.toUpperCase());
            else {
               restArr.push(e.toUpperCase());
            }
         }
      }
   }

   return [vowelsArr, restArr];
}

