/////////////////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

'use strict';

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

///////////////////////////////////////////////// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// With actual minutes via array and .pop (Jonas' solution)
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// With actual minutes time via Math.max
console.log(
  `An event happened, on average, every ${
    Math.max(...gameEvents.keys()) / gameEvents.size
  } minutes`
);

///////////////////////////////////////////////// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL

// if-else statement with EXTRA TIME
console.log('\n\nif-else statement with EXTRA TIME\n ');
for (const [key, value] of gameEvents) {
  if (key < 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  else if (key > 90) console.log(`[EXTRA TIME] ${key}: ${value}`);
  else console.log(`[SECOND HALF] ${key}: ${value}`);
}

// Ternary operator without EXTRA TIME
console.log('\n\nTernary operator without EXTRA TIME\n ');
for (const [key, value] of gameEvents) {
  key < 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
}

// Refactor if-else statement with EXTRA TIME
console.log('\n\nRefactor if-else statement with EXTRA TIME\n ');
for (const [min, event] of gameEvents) {
  let half = '';
  if (min < 45) {
    half = 'FIRST';
  } else if (min > 90) {
    half = 'EXTRA';
  } else {
    half = 'SECOND';
  }
  half === 'EXTRA'
    ? console.log(`[${half} TIME] ${min}: ${event}`)
    : console.log(`[${half} HALF] ${min}: ${event}`);
}

// Refactor ternary operator without EXTRA TIME
console.log('\n\nRefactor ternary operator without EXTRA TIME\n ');
for (const [min, event] of gameEvents) {
  const half = min < 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
