/* Coding Challenge #1 */

// #1 v1
/* 
// BMI V1 Data 1

// Mark
let mass = 78;
let height = 1.69;
let bmi = mass / height ** 2;
markBMI = bmi;

// John
mass = 92;
height = 1.95;
bmi = mass / height ** 2;
johnBMI = bmi;
console.log(markBMI, johnBMI);

// BMI Comparison
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// BMI V1 Data 2

// Mark
mass = 95;
height = 1.88;
bmi = mass / height ** 2;
markBMI = bmi;

// John
mass = 85;
height = 1.76;
bmi = mass / height ** 2;
johnBMI = bmi;
console.log(markBMI, johnBMI);

// BMI Comparison
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// BMI V2 Data 1

// Mark
mass = 78;
height = 1.69;
bmi = mass / (height * height);
markBMI = bmi;

// John
mass = 92;
height = 1.95;
bmi = mass / (height * height);
johnBMI = bmi;
console.log(markBMI, johnBMI);

// BMI Comparison
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// BMI V2 Data 2

// Mark
mass = 95;
height = 1.88;
bmi = mass / (height * height);
markBMI = bmi;

// John
mass = 85;
height = 1.76;
bmi = mass / (height * height);
johnBMI = bmi;
console.log(markBMI, johnBMI);

// BMI Comparison
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
 */

// #1 v2
/* 
// BMI V1 Data 1

// Mark
const massMark = 78;
const heightMark = 1.69;
let bmi = massMark / (heightMark * heightMark);
const BMIMark = bmi;
console.log(BMIMark);

// John
const massJohn = 92;
const heightJohn = 1.95;
bmi = massJohn / (heightJohn * heightJohn);
const BMIJohn = bmi;
console.log(BMIJohn);

// BMI Comparison
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
 */

// #1 v3
/* 
const massMark = 78;
const heightMark = 1.69; // height in meters
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn)

console.log (BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
 */

/* Coding Challenge #2 */
/* 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂

 
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`)
}


if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
 */

/* Coding Challenge #3 */
