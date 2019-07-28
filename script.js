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
