// Baby Shark Lyrics
// baby shark

// Create a function, as short as possible, that returns this lyrics.
// Your code should be less than 300 characters. Watch out for the three points at the end of the song.

const babySharkLyrics = () => {
   const [dodo, arr, repeat, final] = [
      ', doo doo doo doo doo doo\n',
      ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', "Let's go hunt", 'Run away,…'],
      (name) => name + dodo,
      (str) => `${str}!\n`
   ];
   let song = '';
   for (let k = 0; k < arr.length; k++) {
      if (k === arr.length - 1) song += arr[arr.length - 1];
      else
         for (let i = 0; i < 4; i++) {
            song += i === 3 ? final(arr[k]) : repeat(arr[k]);
         }
   }
   return song;
};

const expected =
   "Baby shark, doo doo doo doo doo doo\nBaby shark, doo doo doo doo doo doo\nBaby shark, doo doo doo doo doo doo\nBaby shark!\nMommy shark, doo doo doo doo doo doo\nMommy shark, doo doo doo doo doo doo\nMommy shark, doo doo doo doo doo doo\nMommy shark!\nDaddy shark, doo doo doo doo doo doo\nDaddy shark, doo doo doo doo doo doo\nDaddy shark, doo doo doo doo doo doo\nDaddy shark!\nGrandma shark, doo doo doo doo doo doo\nGrandma shark, doo doo doo doo doo doo\nGrandma shark, doo doo doo doo doo doo\nGrandma shark!\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark!\nLet's go hunt, doo doo doo doo doo doo\nLet's go hunt, doo doo doo doo doo doo\nLet's go hunt, doo doo doo doo doo doo\nLet's go hunt!\nRun away,…";

// babySharkLyrics();

console.log(babySharkLyrics() === expected);
console.log(babySharkLyrics.toString().length);
