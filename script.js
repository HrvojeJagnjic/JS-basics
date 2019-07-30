/*
Variables and data types
*/
/*var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// Variable naming rules
var _$3years = 3;
var johnMark = "John and Mark";
var if = 23;
*/

/* Variable mutation and type coercion */
/*
var firstName = "John";
var age = 28;
console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;
// Type coercion
console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

// Variable mutation
age = "twenty eight";
job = "driver";
alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

prompt("What is his last Name?");
var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/ /*********************** */

/* basic operators*/
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Type of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);

/* Operator precedence*/
var now = 2018;
var yearMark = 1989;
var fullAge = 18;
// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignements
var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 //31 - 6 // 26
console.log(x, y);

//More operators
x = x * 2;
// isto samo drugcije napisano
x *= 2;
console.log(x);

x += 10;
console.log(x);
x = x + 1;
x += 1;
x++;
console.log(x);
x--;

//Coding challenge 1

var massMark = 98; // kg
var heightMark = 1.8; //meters
var massJohn = 84;
var heightJohn = 1.83;

var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

var higherBmi = bmiJohn > bmiMark;
console.log(higherBmi);

console.log("Is John's BMI higher than Marks?" + " " + higherBmi);

/* If else statements*/

/*var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
}*/
var firstName = "John";
var civilStatus = "married";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var massMark = 98; // kg
var heightMark = 1.8; //meters
var massJohn = 84;
var heightJohn = 1.83;

var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

var higherBmi = bmiJohn > bmiMark;
console.log(higherBmi);
if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than John's.");
} else {
  console.log("John's BMI is higher than Mark's.");
}
//console.log("Is John's BMI higher than Marks?" + " " + higherBmi);

/* Boolean logic */

var firstName = "John";
var age = 20;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  //Between 13 & 20 === age >= 13 AND age < 20
  console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a youngman.");
} else {
  console.log(firstName + " is a man.");
}
