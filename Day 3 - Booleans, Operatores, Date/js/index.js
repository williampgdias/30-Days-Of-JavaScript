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
