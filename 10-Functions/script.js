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
/* 
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
 */

/////////////////////////////////////////////////
// Functions Returning Functions
/* 
'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

// Function call with another parameter for function inside function
greet('Hello')('Jonas');

// Challenge
// Create greet and greeter functions using only arrow functions

const greetArr = greeting => {
  const greeterArr = name => console.log(`${greeting} ${name}`);
  return greeterArr;
};
greetArr('Hi')('Mono');

// Jonas' solution
const greetArrJ = greeting => name => console.log(`${greeting} ${name}`);
greetArrJ('Yo')('Takashi-kun');
 */

/////////////////////////////////////////////////
// The call and apply Methods
/* 
'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // Enchanced object literal syntax for object methods (functions)
  // instead of old way:
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    // Creating an array with objects inside
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work because it is method copy and 'this' keyword from method points to 'undefined'
// book(23, 'Sarah Williams');

// Call method
// We call the call method that calls book method (function) with 'this' keyword set to 'eurowings' as the first argument of the call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
// The same as the call method but receives an array of arguments instead of just a list
// It is not used anymore in modern JS, just use the call method with spread operator (...)
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
 */

/////////////////////////////////////////////////
// The bind Method
