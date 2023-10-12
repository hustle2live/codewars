// url
// https://www.codewars.com/kata/596b8a3fc4cb1de46b000001/train/javascript

function center(strng, width, fill = ' ') {
   if (strng.length >= width) return strng;
   const padLength = (width - strng.length) / 2;
   return fill.repeat(Math.ceil(padLength)) + strng + fill.repeat(Math.floor(padLength));
}
