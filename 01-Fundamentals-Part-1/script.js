//////////////////////////////////////////////////////////////////////////////
// Values and Variables
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//////////////////////////////////////////////////////////////////////////////
// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let _function = 28;

let person = "jonas"; // first uppercase only for OOP
let PI = 3.1415; // uppercase for constants

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

//////////////////////////////////////////////////////////////////////////////
// Data Types
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// let, const and var
/* 
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

// By this way, JS creates a property on the global object, not just variable
lastName = "Schmedtmann";
console.log(lastName);
*/

//////////////////////////////////////////////////////////////////////////////
// Basic Operators
/* 
// math operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// assigment operators

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
 */

//////////////////////////////////////////////////////////////////////////////
// Operator Precedence
/* 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
 */

//////////////////////////////////////////////////////////////////////////////
// Strings and Template Literals
/* 
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
strings
`);
 */

//////////////////////////////////////////////////////////////////////////////
// Taking Decisions: if / else Statements
/* 
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
}

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
 */

//////////////////////////////////////////////////////////////////////////////
// Type Conversion and Coercion
/* 
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I'm " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");
console.log(21 / "3");
console.log("21" / 3);

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);
 */

//////////////////////////////////////////////////////////////////////////////
// Truthy and Falsy Values
/* 
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

let money = 0;
if (money) { // JS will convert money to false because of 0
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

money = 100;
if (money) { // JS will convert money to false because of 0
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
 */

//////////////////////////////////////////////////////////////////////////////
// Equality Operators: == vs ===
/* 
// === - strict, without type coercion
// == - loose, with type coercion, avoid using it as much as possible

const age = "18";
if (age === 18) console.log("You've just become an adult (strict) :D");

if (age == 18) console.log("You've just become an adult (loose) :D");

console.log(18 === 18);
console.log(18 === 19);

console.log("18" == 18);
console.log("18" === 18);

const favorite = Number(prompt("What's your favorite number?"));
console.log(typeof favorite);

// if (favorite == 23) { // '23' == 23
//   console.log(`Cool! ${favorite} is an amazing`)
// }

if (favorite === 23) {
  // 23 === 23
  console.log(`Cool! ${favorite} is an amazing`);
} else if (favorite === 7) {
  console.log(`${favorite} is also a cool number`);
} else if (favorite === 9) {
  console.log(`${favorite} is also a cool number`);
} else {
  console.log("Number is not 23 or 7 or 9");
}

// !== - strict, without type coercion
// != - loose, with type coercion, avoid using it as much as possible

if (favorite !== 23) console.log("Why not 23?");
 */

//////////////////////////////////////////////////////////////////////////////
// Boolean Logic
/* 
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
 */

//////////////////////////////////////////////////////////////////////////////
// The switch Statement
/* 
const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

// The same example using if else
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else console.log("Not a valid day!");
 */

//////////////////////////////////////////////////////////////////////////////
// Statements and Expressions
/* 
3 + 4; // expression
1991; // expression
true && false && !false; // expression

if (23 > 10) {
  const str = "23 is bigger";
} // statement

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`); // statement
 */

//////////////////////////////////////////////////////////////////////////////
// The Conditional (Ternary) Operator
/* 
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
 */
