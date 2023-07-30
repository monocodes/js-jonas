//////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1
/*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. §
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. 

// #1 v1 
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

// Coding Challenge #2
/*
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement 😉

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

//////////////////////////////////////////////////////////////////////////////
// LECTURE Coding Challenge #3
/* 
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
 */
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy");
// } else console.log("Both win the trophy");

//////////////////////////////////////////////////////////////////////////////
// Coding Challenge 3
/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;
// scoreDolphins = (97 + 112 + 101) / 3;
// scoreKoalas = (109 + 95 + 123) / 3;
// scoreDolphins = (97 + 112 + 101) / 3;
// scoreKoalas = (109 + 95 + 106) / 3;

// console.log(`Dolphins: ${scoreDolphins}\nKoalas: ${scoreKoalas}`);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
//   console.log("Both win the trophy 🏆");
// } else console.log("Noone win the trophy 🥲");

//////////////////////////////////////////////////////////////////////////////
// Coding Challenge #4
/* 
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
 */

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${
//     bill + tip
//   }.`
// );
