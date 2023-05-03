// Input >> Output Examples:
// expressionsMatter(1,2,3)  ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

// expressionsMatter(1,1,1)  ==>  return 3

// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/




function expressionMatter(a, b, c) {
   const x = a * b * c,
      y = (a + b) * c,
      f = a * (b + c),
      j = a + b * c,
      k = a + b + c;

   const arr = [x, y, f, j, k].sort((a, b) => a - b);

   return arr.pop();
}







