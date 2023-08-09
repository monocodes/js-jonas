// Remember, we're gonna use strict mode in all scripts now!
/* 
'use strict';

/////////////////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  // Actually this function will not work if we have an array started with 'error'.
  // One of the ways to fix this:
  // let max = -Infinity;
  // let min = Infinity;
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// test
// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  // Actually this function will not work if we have an array started with 'error'.
  // One of the ways to fix this:
  // let max = -Infinity;
  // let min = Infinity;
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
 */

/////////////////////////////////////////////////
// Debugging with the Console and Breakpoints
/* 
'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

/////////////////////////////////////////////////
// Using a Debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  // Actually this function will not work if we have an array started with 'error'.
  // One of the ways to fix this:
  // let max = -Infinity;
  // let min = Infinity;
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeNew);
 */

/////////////////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Write a function that takes a values from array and prints a string with them
// - Every next value is a next day
// Jonas:
// - Array transformed to a string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Write compact printing function with for loops
// - Create some construction that save
// Jonas:
// - Transform array into string
// - Transfor each element to a string with ˚C
// - Strings need to contain day (index + 1)
// - Add ... between elements and start and end of a string
// Log string to console

'use strict';

const forecast1 = [17, 21, 23];
const forecast2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // Example: [17, 21, 23] will print
  // "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    const day = i + 1;

    // original
    string = `${string} ${temp}˚C in ${day} days ...`;

    // Jonas
    // string += ` ${arr[i]}˚C in ${day} days ...`;
  }
  console.log('...' + string);
};

printForecast(forecast1);
printForecast(forecast2);
