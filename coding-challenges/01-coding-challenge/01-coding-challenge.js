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
