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