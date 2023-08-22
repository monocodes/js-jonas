/////////////////////////////////////////////////
// Scoping in Practice
/* 
'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with the same name as outer scope's variable
      const firstName = 'Steven'; // it will work with 'Steven' because javascript will not perform variable lookup

      // Reassigning outer scope's variable
      // output = 'NEW OUTPUT!'; // Manipulate an existing variable, will be used

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Create new variable with the same name but inside the current scope
      const output = 'NEW OUTPUT!';
    }
    // console.log(str); // ReferenceError
    console.log(millenial);
    // console.log(add(2, 3)); // ReferenceError
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); // ReferenceError
// printAge(); // ReferenceError
 */

/////////////////////////////////////////////////
// Hoisting and TDZ in Practice
/* 
'use strict';

// Variables
console.log(me);
// console.log(job);
// ReferenceError: Cannot access 'job' before initialization
// console.log(year);
// ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow); // undefined
// console.log(addArrow(2, 3));
// TypeError: addArrow is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();
// numProducts here is undefined because of using var, undefined is a falsy value as 0

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
 */

/////////////////////////////////////////////////
// The this Keyword in Practice
/* 
'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// f();
// TypeError: Cannot read properties of undefined (reading 'year')
 */

/////////////////////////////////////////////////
// Regular Functions vs. Arrow Functions
/* 
'use strict';

// var firstName = 'Matilda';
// Just don't use Arrow functions as methods

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

  //    // Solution 1   
  //   // Pre ES6 solution with self or that
  //   const self = this; // self or that
  //   const isMillenial = function () {
  //     console.log(self);
  //     console.log(self.year >= 1981 && self.year <= 1996);
  //     // console.log(this.year >= 1981 && this.year <= 1996);
  //     // TypeError: Cannot read properties of undefined (reading 'year')
  //   };
  //   isMillenial();
  // },

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 5, 8); // Arrow functions don't have arguments keyword
// ReferenceError: arguments is not defined
 */

/////////////////////////////////////////////////
// Primitives vs. Objects (Primitives vs. Reference Types)
/* 
'use strict';

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;

console.log('Friend:', friend);
// Friend: {name: 'Jonas', age: 27}

console.log('Me:', me);
// Me: {name: 'Jonas', age: 27}
 */

/////////////////////////////////////////////////
// Primitives vs. Objects in Practice
/* 
'use strict';

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};
// TypeError: Assignment to constant variable.

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Object.assign() function copy only first level
// Object in object won't be copied
// Deep clone to clone full object later
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
 */
