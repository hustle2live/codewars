function babySharkLyrics() {
   const dodo = ', doo doo doo doo doo doo\n';
   const repeatString = (greetings) => `${greetings}${dodo}`;
   const finalWord = (greetings) => greetings + '!\n';
   const name = [
      'Baby shark',
      'Mommy shark',
      'Daddy shark',
      'Grandma shark',
      'Grandpa shark',
      "Let's go hunt",
      'Run away,…'
   ];

   let song = '';

   for (let k = 0; k < name.length; k++) {
      if (k === name.length - 1) {
         song += name[name.length - 1];
      } else {
         for (let i = 0; i < 4; i++) {
            if (i === 3) {
               song += finalWord(name[k]);
            } else {
               song += repeatString(name[k]);
            }
         }
      }
   }
   // console.log(song);
   return song;
}

const expected =
   "Baby shark, doo doo doo doo doo doo\nBaby shark, doo doo doo doo doo doo\nBaby shark, doo doo doo doo doo doo\nBaby shark!\nMommy shark, doo doo doo doo doo doo\nMommy shark, doo doo doo doo doo doo\nMommy shark, doo doo doo doo doo doo\nMommy shark!\nDaddy shark, doo doo doo doo doo doo\nDaddy shark, doo doo doo doo doo doo\nDaddy shark, doo doo doo doo doo doo\nDaddy shark!\nGrandma shark, doo doo doo doo doo doo\nGrandma shark, doo doo doo doo doo doo\nGrandma shark, doo doo doo doo doo doo\nGrandma shark!\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark!\nLet's go hunt, doo doo doo doo doo doo\nLet's go hunt, doo doo doo doo doo doo\nLet's go hunt, doo doo doo doo doo doo\nLet's go hunt!\nRun away,…";

// babySharkLyrics();

console.log(babySharkLyrics() === expected);
console.log(babySharkLyrics.toString().length);
