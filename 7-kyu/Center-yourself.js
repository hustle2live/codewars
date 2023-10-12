// url
// https://www.codewars.com/kata/596b8a3fc4cb1de46b000001/train/javascript

function center(strng, width, fill = ' ') {
   if (strng.length >= width) return strng;
   const padLength = (width - strng.length) / 2;
   return fill.repeat(Math.ceil(padLength)) + strng + fill.repeat(Math.floor(padLength));
}

function centerNotRefactor(strng, width, fill = ' ') {
   if (strng.length > width) {
      return strng;
   }

   if (strng.length === 0 && width > 0) {
      return [...Array(width).keys()].map((i) => fill).join('');
   }

   const fillLength = width - strng.length;

   let padLeft = [];
   let padRight = [];

   if (fillLength % 2 === 0) {
      newArrLength = fillLength / 2 || 0;

      padLeft = padRight = [...Array(newArrLength).keys()].map((i) => fill);
   } else {
      newArrLength = Math.floor(fillLength / 2) + 1 || 0;

      padLeft = [...Array(newArrLength).keys()].map((i) => fill);
      padRight = padLeft.slice(0, -1);
   }

   const newString = padLeft.join('') + strng + padRight.join('');

   return newString;
}
