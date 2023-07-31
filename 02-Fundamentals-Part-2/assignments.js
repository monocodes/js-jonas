//////////////////////////////////////////////////////////////////////////////
// LECTURE: Functions
/* 
1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console 
 */

"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people nad its capital city is ${capitalCity}`;
}

const descArmenia = describeCountry("Armenia", 2, "Yerevan");
console.log(descArmenia);

const descJapan = describeCountry("Japan", 125, "Tokyo");
console.log(descJapan);

const descSpain = describeCountry("Spain", 47, "Madrid");
console.log(descSpain);