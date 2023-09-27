/////////////////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/////////////////////////////////////////////////
// My first solution with functions
/* 
'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const capitilizeWord = function (word) {
  const wordCapitilized = word[0].toUpperCase() + word.slice(1);
  return wordCapitilized;
};

const textTransform = function (text) {
  const words = text.split('\n');
  const wordsTransformed = [];

  for (let word of words) {
    word = word.trim().toLowerCase().split('_');
    // After split method we have arrays with 2 words in each one
    wordsTransformed.push(word[0] + capitilizeWord(word[1]));
  }
  // Return array with transformed camelCase words
  return wordsTransformed;
};

// Testing
// const message =
//   'underscore_case\n first_name\nSome_Variable \n  calculate_AGE\ndelayed_departure';
// console.log(textTransform(message));

const printText = function (array) {
  let i = 1;
  for (const word of array) {
    console.log(word.padEnd(20) + '✅'.repeat(i));
    i++;
  }
};

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  printText(textTransform(text));
});
 */

// My Refactored solution without functions after watching Jonas' solution and solutions from Q&A

'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const words = text.split('\n');

  let i = 1;

  for (const word of words) {
    // Better solution with destructuring arrays into 2 variables
    const [first, second] = word.toLowerCase().trim().split('_');
    const output = first + second[0].toUpperCase() + second.slice(1);

    // Solution with picking letter from word, working only with let word, not const word
    // word = word.toLowerCase().trim().split('_');
    // console.log(word[0] + word[1][0].toUpperCase() + word[1].slice(1));
    console.log(output.padEnd(20) + '✅'.repeat(i));
    i++;
  }
});

// Jonas' solution

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
