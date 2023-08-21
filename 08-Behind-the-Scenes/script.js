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
