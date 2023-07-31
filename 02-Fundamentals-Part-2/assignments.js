//////////////////////////////////////////////////////////////////////////////
// LECTURE: Functions

/* 
1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console 
 */

/* 
"use strict";

function describeCountry(country, population, capitalCity) {
  const descCountry = `${country} has ${population} million people nad its capital city is ${capitalCity}`;
  return descCountry;
}

const descArmenia = describeCountry("Armenia", 2, "Yerevan");
console.log(descArmenia);

const descJapan = describeCountry("Japan", 125, "Tokyo");
console.log(descJapan);

const descSpain = describeCountry("Spain", 47, "Madrid");
console.log(descSpain);
 */

//////////////////////////////////////////////////////////////////////////////
// LECTURE: Function Declarations vs. Expressions

/* 
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations) 
 */

/* 
"use strict";

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentArmenia1 = percentageOfWorld1(2);
const percentJapan1 = percentageOfWorld1(125);
const percentSpain1 = percentageOfWorld1(47);
console.log(percentArmenia1, percentJapan1, percentSpain1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percentArmenia2 = percentageOfWorld2(2);
const percentJapan2 = percentageOfWorld2(125);
const percentSpain2 = percentageOfWorld2(47);
console.log(percentArmenia2, percentJapan2, percentSpain2);
 */

//////////////////////////////////////////////////////////////////////////////
// LECTURE: Arrow Functions

// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

/* 
"use strict";

const percentageOfWorld3 = population => (population / 7900) * 100;
const percentArmenia3 = percentageOfWorld3(2);
const percentJapan3 = percentageOfWorld3(125);
const percentSpain3 = percentageOfWorld3(47);
console.log(percentArmenia3, percentJapan3, percentSpain3);
 */
