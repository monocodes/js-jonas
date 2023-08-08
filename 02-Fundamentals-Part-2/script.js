//////////////////////////////////////////////////////////////////////////////
// Activating Sctrict Mode
/* 
"use strict";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// Eliminates some JavaScript silent errors by changing them to throw errors.
// Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
// Prohibits some syntax likely to be defined in future versions of ECMAScript.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if = 23;
 */

//////////////////////////////////////////////////////////////////////////////
// Functions
/* 
"use strict";

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
 */

//////////////////////////////////////////////////////////////////////////////
// Function Declarations vs. Expressions
/* 
"use strict";

// Function declaration
// We CAN call functions before defining it!

const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function expression
// We CAN'T call functions before defining it!
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
 */

//////////////////////////////////////////////////////////////////////////////
// Arrow Functions
/* 
"use strict";

// Arrow function
// Result is always RETURNed
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
 */

//////////////////////////////////////////////////////////////////////////////
// Functions Calling Other Functions
/* 
"use strict";

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
 */

//////////////////////////////////////////////////////////////////////////////
// Reviewing Functions
/* 
"use strict";
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1; // -1 is standard "no-meaning" number in programming
  }

  return retirement;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

// Three different ways of writing functions, but they all work in a similar way: receive input data, transform data, and the output data.
// Function declarations
// Can be used before it's declared
function calcAgeDe(birthYear) {
  return 2037 - birthYear;
}

// Function expressions
// Function value stored on a varibale
const calcAgeEx = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow functions
// Great for a quick one-line functions
// Has no 'this' keyword
const calcAgeAr = (birthYear) => 2037 - birthYear;
 */

//////////////////////////////////////////////////////////////////////////////
// Introduction to Arrays
/* 
"use strict";
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// friends = ["Bob", "Alice"]; // Uncaught TypeError: Assignment to constant variable.

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
 */

//////////////////////////////////////////////////////////////////////////////
// Basic Array Operations (Methods)
/* 
"use strict";

// Add elements to the array
// push - add element in the end of the array

const friends = ["Michael", "Steven", "Peter"];
const newLenth = friends.push("Jay");
// all functions return something, let's check what will return push function
console.log(newLenth); // push returns array's lenth

console.log(friends);

// unshift - add element in the beginning of the array

friends.unshift("John");
console.log(friends);

// Remove elements from an array
// pop - remove last element from the array
friends.pop();
const popped = friends.pop();
console.log(popped); // pop returns popped element
console.log(friends);

// shift - remove first element in the array
friends.shift();
console.log(friends);

// indexOf - return index of the element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // -1

// includes - return true or false if the element exists in the array or not
// works without types coercion
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Peter");
}
 */

//////////////////////////////////////////////////////////////////////////////
// Introduction to Objects
/* 
"use strict";

// Array
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// Object (dictionary in Python)
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"]
};
 */

//////////////////////////////////////////////////////////////////////////////
// Dot vs. Bracket Notation
/* 
"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

// Dot notation
console.log(jonas.lastName);

// Bracket notation
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want about Jonas? Choose between firstName, lastName, age, job, and friends"
);

// console.log(jonas.interestedIn);
// 'undefined' because 'jonas' object does not have property 'jonas.interestedIn'

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);
 */

//////////////////////////////////////////////////////////////////////////////
// Object Methods
/* 
"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
  },
};

// 'this' keyword is used to refer to an current object

jonas.calcAge(); // method is needed to be run or it will not work, property will never exist otherwise
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas["calcAge"](1991));

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license."

console.log(jonas.getSummary());
 */

//////////////////////////////////////////////////////////////////////////////
// Iteration: The for Loop
/* 
"use strict";

// console.log("Lifting weights repetition 1 🏋️‍♀️");
// console.log("Lifting weights repetition 2 🏋️‍♀️");
// console.log("Lifting weights repetition 3 🏋️‍♀️");
// console.log("Lifting weights repetition 4 🏋️‍♀️");
// console.log("Lifting weights repetition 5 🏋️‍♀️");
// console.log("Lifting weights repetition 6 🏋️‍♀️");
// console.log("Lifting weights repetition 7 🏋️‍♀️");
// console.log("Lifting weights repetition 8 🏋️‍♀️");
// console.log("Lifting weights repetition 9 🏋️‍♀️");
// console.log("Lifting weights repetition 10 🏋️‍♀️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
 */

//////////////////////////////////////////////////////////////////////////////
// Looping Arrays, Breaking and Continuing
/* 
"use strict";

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);
// console.log(jonas[3]);
// console.log(jonas[4]);
// jonas[5] does not exist

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];

  // Filling types array with push (it's cleaner)
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---")
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---")
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  
  console.log(jonas[i], typeof jonas[i]);
}
 */

//////////////////////////////////////////////////////////////////////////////
// Looping Backwards and Loops in Loops
/* 
"use strict";

// Looping Backwards
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// Loop in a Loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
 */

//////////////////////////////////////////////////////////////////////////////
// The while Loop
/* 
"use strict";

// for loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR: Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// while loop
let rep = 1;

while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice} 🎲`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
 */

//////////////////////////////////////////////////////////////////////////////
//
