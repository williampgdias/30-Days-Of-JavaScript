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

// Format there values to a human readable time format
const now2 = new Date();
const year2 = now.getFullYear(); // return year
const month2 = now.getMonth() + 1; // return month (0-11)
const date2 = now.getDate(); // return date (1-31)
const hours2 = now.getHours(); // return number (0-23)
const minutes2 = now.getMinutes(); // return number (0-59)

console.log(`${date2}/${month2}/${year2} ${hours2}:${minutes2}`);

// Getting time - This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in to ways.

// 1. Using getTime()
const time = new Date();
console.log(time.getTime());

// 2. Using Date.now()
const allSeconds = Date.now();
console.log(allSeconds);

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds);

//////////////////// EXERCISES LEVEL 1 ////////////////////
console.log('');
console.log('//////////////////// EXERCISES LEVEL 1 ////////////////////');
console.log('');

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
console.log('QUESTION 1');
let firstName2 = 'William';
let lastName = 'Dias';
let country = 'Brazil';
let city = 'Rio de Janeiro';
let age = 33;
let isMarried3 = true;
let year3 = 1989;

console.table(`    firstName: ${typeof firstName2}, 
    lastName: ${typeof lastName}, 
    country: ${typeof country},
    city: ${typeof city},
    age: ${typeof age},
    isMarried3: ${typeof isMarried3},
    year3: ${typeof year3}`);

// 2. Check if type of '10' is equal to 10
console.log('QUESTION 2');
let number2_1 = '10';
console.log(number2_1 === typeof 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log('QUESTION 3');

// 4. Boolean value is either true or false.
console.log('QUESTION 4');

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log('QUESTION 5');

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

// Find the length of python and jargon and make a falsy comparison statement.
let pTech = 'python';
let jTech = 'jargon';

console.log(pTech.length);
console.log(jTech.length);
pTech.length < 7 || jTech < 7
    ? console.log('The words Python and Jargon have less than 7 characters')
    : console.log('The words Python and Jargon have more than 7 characters');

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log('QUESTION 6');

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python

// 7. Use the Date object to do the following activities
console.log('QUESTION 7');

// What is the year today?
const year1_1 = new Date();
console.log(`The year today is: ${year1_1.getFullYear()}`);
// What is the month today as a number?
const month1_1 = new Date();
console.log(`The month today is: ${month1_1.getMonth()}`);
// What is the date today?
const date1_1 = new Date();
console.log(`The date today is: ${date1_1.getDate()}`);
// What is the day today as a number?
const day1_1 = new Date();
console.log(`The day today is: ${day1_1.getDay()}`);
// What is the hours now?
const hours1_1 = new Date();
console.log(`The hour today is: ${hours1_1.getHours()}`);
// What is the minutes now?
const minutes1_1 = new Date();
console.log(`The minutes today are: ${minutes1_1.getMinutes()}`);
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const allSeconds1_1 = Date.now();
console.log(`The seconds from January 1, 1970 to now are: ${allSeconds1_1}`);

//////////////////// EXERCISES LEVEL 2 ////////////////////
console.log('');
console.log('//////////////////// EXERCISES LEVEL 2 ////////////////////');
console.log('');

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
console.log('QUESTION 1');

// let base1_2 = prompt('Enter the base:');
// let height1_2 = prompt('Enter the height:');

// let triangleArea = 0.5 * base1_2 * height1_2;
// console.log(triangleArea);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c)
console.log('QUESTION 2');

// let firstSide = prompt('Enter side A:');
// let secondSide = prompt('Enter side B:');
// let thirdSide = prompt('Enter side C:');

// let trianglePerimeter =
//     parseInt(firstSide) + parseInt(secondSide) + parseInt(thirdSide);

// console.log(`The perimeter of the triangle is: ${trianglePerimeter}`);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
console.log('QUESTION 3');

// let width3_2 = prompt('What is the Width of the Rectangle?');
// let length3_2 = prompt('What is the Length of the Rectangle?');
// let areaRectangle = length3_2 * width3_2;
// console.log(areaRectangle);
// let perimeterRectangle = 2 * (parseInt(width3_2) + parseInt(length3_2));
// console.log(perimeterRectangle);

// 4. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
console.log('QUESTION 4');

// let workedHours = prompt('How many hours did you work this week?');
// let rateHour = prompt('How much do you get per hour?');
// console.log(
//     `Your weekly earning is ${workedHours * rateHour} euro
//     and ${workedHours * rateHour * 4} euro per month.`
// );

// 5. If the length of your name is greater than 7 say, your name is long else say your name is short.
console.log('QUESTION 5');

let firstName5_2 = prompt('What is your name?');
firstName5_2.length > 7
    ? console.log('Your name is long')
    : console.log('Your name is short.');
