// LECTURE: Values and Variables
/* 
let country = "Armenia";
let continent = "Eurasia";
let population = 2;

console.log(country);
console.log(continent);
console.log(population);
 */

/* LECTURE: Data Types */
/* 
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
 */

// LECTURE: let, const and var
/* 
language = "Armenian";
const country = "Armenia";
const continent = "Eurasia";
const isIsland = false;
// isIsland = true
 */

// LECTURE: Basic Operators
/* 
let population = 2;
const language = "Armenian";
const country = "Armenia";
const continent = "Eurasia";

console.log(population / 2);

population++;
console.log(population);

let finlandPopulation = 6;
console.log(population > finlandPopulation);

let averagePopulation = 33;
console.log(population < averagePopulation);

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description);
 */

// LECTURE: Strings and Template Literals
/* 
const population = 2;
const language = "Armenian";
const country = "Armenia";
const continent = "Eurasia";

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);
 */

// LECTURE: Taking Decisions: if / else Statements
/*  
const population = 2;
const country = "Armenia";

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}
 */

// LECTURE: Type Conversion and Coercion
/* 
console.log('9' - '5'); // 4
console.log("19" - "13" + "17"); // "617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
 */
