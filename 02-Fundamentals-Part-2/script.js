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
