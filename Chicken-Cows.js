
// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.
// In the form:
// [Heads, Legs] = [72, 200]
// VALID - [72, 200] =>             [44 , 28]
//                              [Chickens, Cows]
// INVALID - [72, 201] => "No solutions"



function animals(heads, legs) {
   const INVALID = 'No solutions';

   const Chickens = Math.floor((heads - legs / 4) * 2);
   const Cows = Math.floor(legs - Chickens * 2) / 4;

   if ([heads, legs] === [0, 0]) return [0, 0];
   if (heads < 0 || legs < 0 || Chickens < 0 || Cows < 0) return INVALID;

   return legs === ((Chickens * 2) + (Cows * 4)) && heads === (Chickens + Cows)  ? [Chickens, Cows] : INVALID;
}



