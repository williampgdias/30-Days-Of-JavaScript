// Example: Boolean Values

let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = false;
let trueValue = 4 > 3;
let falseValue = 4 < 3;

let firstName;
console.log(firstName);

let empty = null;
console.log(empty); // null means no value

// ARITHMETIC OPERATORS

let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf);

const PI = 3.14;
let radius = 100;

const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

const gravity = 9.81;
let mass = 72;

const weight = mass * gravity;
console.log(weight);

const boilingPoint = 100;
const bodyTemp = 37;

console.log(
    `The boiling point of water is ${boilingPoint}oC. \nHuman body temperature is ${bodyTemp}oC. \nThe gravity of earth is ${gravity}m/s2.`
);

// Logical Operators
// && ampersand operator example

const check1 = 4 > 3 && 10 > 5; // true && true -> true
const check2 = 4 > 3 && 10 < 5; // true && false -> false
const check3 = 4 < 3 && 10 < 5; // false && false -> false

// || pipe operator example

const check4 = 4 < 3 || 10 > 5; // true || true -> true
const check5 = 4 > 3 || 10 < 5; // true || false -> true
const check6 = 4 < 3 || 10 < 5; // false || false -> false

//! Negation example

let check7 = 4 > 3; // true
let check8 = !(4 > 3); // false
let isLightOn2 = true;
let isLightoff = !isLightOn2; // false
let isMarried2 = !false;

// Increment operator

// 1. Pre-increment
let count = 0;
console.log(++count);
console.log(count);

// 2. Post-increment
let count2 = 0;
console.log(count2++);
console.log(count2);

// 3. Ternary Operators
let isRaining2 = true;
isRaining2
    ? console.log('You need a rain coat')
    : console.log('No need for a rain coat');

isRaining2 = false;
isRaining2
    ? console.log('You need a rain coat')
    : console.log('No need for a rain coat');

let number = 5;
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`);

number = -5;
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`);

// 4. Window prompt()
// let number2 = prompt('Enter a number', 'number goes here');
// console.log(number2);

// const agree = confirm('Are you sure you like to delete?');
// console.log(agree); // result will be true or false based on what you click on the dialog box

// Date Object

// Creating a time object
const now = new Date();
console.log(now);

// Getting full year
const fullYear = new Date();
console.log(fullYear.getFullYear());

// Getting month
const month = new Date();
console.log(month.getMonth()); // starts with 0 (0-11)

// Getting day of the month
const dayOfTheMonth = new Date();
console.log(dayOfTheMonth.getDate()); // day(1-31)

// Getting day of the week
const dayOfTheWeek = new Date();
console.log(dayOfTheWeek.getDay()); // Sunday is 0, Monday is 1 and Saturday is 6

// Getting hours
const hours = new Date();
console.log(hours.getHours());

// Getting minutes
const minutes = new Date();
console.log(minutes.getMinutes());

// Getting seconds
const seconds = new Date();
console.log(seconds.getSeconds());

// Getting time - This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in to ways.

// 1. Using getTime()
const time = new Date();
console.log(time.getTime());

const teste = new getDate();
