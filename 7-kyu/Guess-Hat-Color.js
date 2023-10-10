// Task
// url :
// https://www.codewars.com/kata/58c21c4ff130b7cab400009e

// Four men, a, b, c and d are standing in a line, one behind another.
// There's a wall between the first three people (a, b and c) and the last one (d).
// The men a, b and c are lined up in order of height, so that:

// person a can see the backs of b and c
// person b can see the back of c
// person c can see just the wall
// There are 4 hats, 2 black and 2 white. Each person is given a hat. None of them can see their own hat, but person a can see the hats of b and c, while person b can see the hat of person c. Neither c nor d can see any hats.

// Once a person figures out the color of their hat, they shout it.

// Four men, in decreasing height, standing behind each other, wearing black and white colored hats, with the last man on the right hidden behind the wall.

// Your task is to return the person who will guess their hat first. You can assume that they will speak only when they reach a correct conclusion.

const guessHatColor = (a, b, c, d) => (b === c ? 1 : 2);

function guessHatColor1(a, b, c, d) {
   const hats = JSON.parse(JSON.stringify([a, b, c, d]));

   console.log(hats);
   [b, c] = hats.splice(1, 2);

   if (b === c) {
      a = hats[0];
      return 1;
   }

   if (b !== c) {
      b = c === 'white' ? 'back' : 'white';
      return 2;
   }

   return;
}

guessHatColor('white', 'black', 'white', 'black');
