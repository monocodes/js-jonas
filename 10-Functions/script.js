/////////////////////////////////////////////////
// A Closer Look at Functions
// Default Parameters
/* 
'use strict';

const bookings = [];

// ES6 way of declaring default values in function is to declare values before function body
const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  // ES5 way of declaring default values in functions
  // numPassangers = numPassangers || 1;
  // price = price || 199;

  const booking = {
    // Enchanced object literal syntax
    // Create property without declaring variables like that:
    // flightNum: flightNum, numPassangers: numPassangers, etc.
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
// console.log(bookings);

// Skipping second parameter declaration with undefined
createBooking('LH123', undefined, 1000);
 */

/////////////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference
/* 
'use strict';

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
 */

/////////////////////////////////////////////////
// Functions Accepting Callback Functions

'use strict';

const oneWord = function (str) {
  // Replace all the spaces in string with no space by RegEx
  return str.replace(/ /g, '').toLowerCase();
  // Or just use replaceAll method
  // return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // Logging to the console the name of the function
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
