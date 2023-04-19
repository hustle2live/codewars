// Baby Shark Lyrics
// Kata Url : https://www.codewars.com/kata/5d076515e102162ac0dc514e/solutions/javascript

// Create a function, as short as possible, that returns this lyrics.
// Your code should be less than 300 characters. 
// Watch out for the three points at the end of the song.

// const expectedRsult = "Baby shark, doo doo doo doo doo doo\nBaby shark, doo doo doo doo doo doo\nBaby shark, doo doo doo doo doo doo\nBaby shark!\nMommy shark, doo doo doo doo doo doo\nMommy shark, doo doo doo doo doo doo\nMommy shark, doo doo doo doo doo doo\nMommy shark!\nDaddy shark, doo doo doo doo doo doo\nDaddy shark, doo doo doo doo doo doo\nDaddy shark, doo doo doo doo doo doo\nDaddy shark!\nGrandma shark, doo doo doo doo doo doo\nGrandma shark, doo doo doo doo doo doo\nGrandma shark, doo doo doo doo doo doo\nGrandma shark!\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark!\nLet's go hunt, doo doo doo doo doo doo\nLet's go hunt, doo doo doo doo doo doo\nLet's go hunt, doo doo doo doo doo doo\nLet's go hunt!\nRun away,…";


const babySharkLyrics = () =>
   ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', "Let's go hunt"].reduce(
      (acc, name) => (acc += `${name},${' doo'.repeat(6)}\n`.repeat(3) + `${name}!\n`),
      ''
   ) + 'Run away,…';




   