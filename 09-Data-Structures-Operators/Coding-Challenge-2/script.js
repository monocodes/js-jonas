/////////////////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// My solution
// const odds = Object.values(game.odds);

// let i = 0;
// let oddsSum = 0;
// for (const item of odds) {
//   i += 1;
//   oddsSum += item;
// }
// console.log(oddsSum / i);

// Jonas' solution
const odds = Object.values(game.odds);

let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// My solution
const gameEntries = Object.entries(game.odds);
console.log(gameEntries);

for (const [teamName, odd] of gameEntries) {
  game[teamName] || console.log(`Odd of draw: ${odd}`);
  game[teamName] && console.log(`Odd of victory ${game[teamName]}: ${odd}`);
}

// Jonas' solution
for (const [teamName, odd] of Object.entries(game.odds)) {
  const teamStr = teamName === 'x' ? 'draw:' : `victory ${game[teamName]}:`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element

const scorers = {};

for (const playerName of game.scored) {
  scorers[playerName] ? scorers[playerName]++ : (scorers[playerName] = 1);
}

// scorers['Hummels']++;
// scorers['Gnarby'] = scorers['Gnarby'] + 1;
console.log(scorers);

// Tries
// const countScorers = function (array, name) {
//   let count = 0;
//   for (const el of array) {
//     if (el === name) count++;
//   }
//   return { name, count };
// };

// const scorers = {};
// // console.log(countScorers(game.scored, 'Gnarby'));

// const scoreGnarby = countScorers(game.scored, ...game.scored);
// console.log(scoreGnarby);
// // {name: 'Gnarby', count: 1}
// console.log(...game.scored);
