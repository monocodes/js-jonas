// Data needed for a later exercise
/* 
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
 */

/////////////////////////////////////////////////
// Destructuring Arrays
/* 
'use strict';

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */

/////////////////////////////////////////////////
// Destructuring Objects

'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enchanced object literals
  openingHours,

  // ES6 enchanced method (function) declaration inside object
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order receieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is you delicious past with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainInredient, ...otherIngredients) {
    console.log(mainInredient);
    console.log(otherIngredients);
  },
};

// Passing object to function and destructure it
/* 
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects

const { fri } = openingHours;
console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
 */

/////////////////////////////////////////////////
// The Spread Operator (...)
/* 
('use strict');

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array with spread (...) operator
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays with spread (...) operator
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects (but since ES 2018 it is working with objects also)
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);
// SyntaxError: Unexpected token '...'

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects and spread (...) operator
const newRestaurant = { foundingIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Make full object copy with spread (...) operator
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
 */

/////////////////////////////////////////////////
// Rest Pattern and Parameters
// Rest Pattern is the opposite of Spread Operator
// Rest Pattern is useful to collect multiple elements and condense them into array
/* 
('use strict');

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Arrays
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat);

// 2) Functions
// Rest Parameters and Rest Arguments
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
 */

/////////////////////////////////////////////////
// Short Circuiting (&& and ||)
/* 
('use strict');

// || - OR operator will return the first truthy value of all the operands or the last value if all of them are falsy
console.log('-------- OR --------');
// Use ANY data type, return ANY data type, short-curcuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// This will not work with 0 as initial value because 0 is a falsy value
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Short-curcuiting is way better than ternary operator or if-else statements
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// && - AND operator will return the first falsy value or the last value if all of them are truthy
console.log('-------- AND --------');
console.log(0 && 'Jonas');
console.log(7 && 'True');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 */

/////////////////////////////////////////////////
// The Nullish Coalescing Operator (??)
/* 
('use strict');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
// 0 and '' are truthy values for this operator
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
 */

/////////////////////////////////////////////////
// Logical Assigment Operators
/* 
('use strict');

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assigment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assigment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
 */

/////////////////////////////////////////////////
// Looping Arrays: The for-of Loop
/* 
('use strict');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// console.log([...menu.entries()]);

// the old way without destructuring
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// smart way with destructuring array
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
 */

/////////////////////////////////////////////////
// Enchanced Object Literals

// ^ it's in restaurant object (openingHours)

/////////////////////////////////////////////////
// Optional Chaining (?.)
/*

'use strict';

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // [day] Bracket Notation to access Object Properties
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
 */

/////////////////////////////////////////////////
// Looping Objects: Object Keys, Values and Entries
/* 
('use strict');

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
 */

/////////////////////////////////////////////////
// Sets
/* 
('use strict');

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set());

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // Create an array from set using spread operator
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
// or
console.log(new Set(staff).size);

console.log(new Set('jonasschmedtmann').size);
 */

/////////////////////////////////////////////////
// Maps: Fundamentals

// Maps are like objects, but as a key you can have any type of value. In objects all keys are strings.
/* 
('use strict');

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

// Chain set method
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(time > rest.get('open') && time < rest.get('close'));
// console.log(time < rest.get('close'));
// console.log(time > rest.get('open'));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear(); // delete everything from map

// Arrays as a keys inside maps is possible only as variable
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
 */

/////////////////////////////////////////////////
// Maps: Iteration
/* 
('use strict');

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map via Object.entries
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key == 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(answer === question.get('correct')));

// Convert map to array with spread operator
console.log([...question]);
console.log(question.entries()); // exactly the same as a previous one
console.log([...question.keys()]);
console.log([...question.values()]);
 */

/////////////////////////////////////////////////
// Working With Strings - Part 1
/* 
('use strict');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// String Methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // 'Air' without space after Air (7 - 4 = 3)

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // + 1 to start from 'P'

console.log(airline.slice(-2)); // 'al' - starting from the end
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Behind the scenes JavaScript converts primitive string to a string object with String function
console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
 */

/////////////////////////////////////////////////
// Working With Strings - Part 2
/* 
('use strict');

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log('jonas'.toUpperCase());

// Fix capitalization in name
// JavaScript ridiculous capitalization
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Capitilize word function
const capitilizeMe = function (word) {
  const wordLower = word.toLowerCase();
  const wordCorrect = wordLower[0].toUpperCase() + wordLower.slice(1);
  return wordCorrect;
};

console.log(capitilizeMe('Wan'));
console.log(capitilizeMe('moNo'));

// trim() (trimEnd and trimStart) method removes all whitespaces including \n from both ends of the string

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Email comparing function
const compareEmail = function (email1, email2) {
  return email1 === email2;
};

console.log(compareEmail(email, loginEmail));

// Email normalization function
const fixEmail = function (email) {
  const fixedEmail = email.toLowerCase().trim();
  return `${email.trim()} -> ${fixedEmail}`;
};

console.log(fixEmail(loginEmail));

// Replacing the parts of string
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// Will be replaced only first occurence of 'door'
console.log(announcement.replace('door', 'gate'));

// Modern replaceAll method
console.log(announcement.replaceAll('door', 'gate'));

// RegEx - syntax is like sed syntax, because its normal RegEx
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// includes, startsWith, endsWith

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
 */

/////////////////////////////////////////////////
// Working With Strings - Part 3
/* 
('use strict');

// Split and join
// Split method to divide strings by divider to an array

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// Join method to join elements from array to string

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Capitilize multiple words function
const capitilizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // Capitilize with push method
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    // Capitilize with replace method
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitilizeName('jessica ann smith davis');
capitilizeName('jonas schmedtmann');

// Padding - method to add a number of characters to the string until the string has a certail desired lenth
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
// +++++++++++Go to gate 23!+++++
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));
// +++++++++++++++Jonas++++++++++

// Credit Card masking function using padding
const maskCreditCard = function (number) {
  // Convert a number to the string
  // or const str = String(number)
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat - method to repeat string multiple times
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
 */

/////////////////////////////////////////////////
// String Methods Practice
/* 
('use strict');

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
}
 */
