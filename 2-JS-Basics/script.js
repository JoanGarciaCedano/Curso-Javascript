//console.log('Hola Mundo!!!');

/*******************************
    Variables and data types
*/

/*
var firstName = 'Joan';
console.log(firstName);

var lastName = 'García';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

var job = 'Teacher';
console.log(job);

//Variable naming rules
var _3years = 3;
var jhonMark = "Jhon and Mark";
//var if = 30;
*/

/********************************
 * Variable mutation and type coercion

var firstName = 'Jhon';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?', 0);
console.log(firstName + ' ' + lastName);
 */

 /***************************
  * Basic operators
 

var year, yearJhon, yearMark;
now = 2019
ageJhon = 28;
ageMark = 33;

yearJhon = now - ageJhon;
yearMark = now - ageMark;

console.log(yearJhon);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var jhonOlder = ageJhon < ageMark;
console.log(jhonOlder);

//typeof operator
console.log(typeof jhonOlder);
console.log(typeof ageJhon);
console.log(typeof 'Mark is older than Jhon');
var x;
console.log(typeof x);
 */

 /***********************************
  * Operator precedence
 

var now = 2019;
var yearJhon = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJhon >= fullAge;
console.log(isFullAge);

// Grouping
var ageJhon = now - yearJhon;
var ageMark = 35;
var average = (ageJhon + ageMark) / 2;
console.log(average);

// Multiple assigments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y); 

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
 */

 /***************************************
  * CODING CHALLENGE 1
  * 
  Mark and John are trying to compare their BMI (Body Mass Index), which is calculated
  using the formula: BMI = mass / height^2 = mass / (height * height).
  (mass in kg and height in meter).

  1. Store Mark's and John's mass and height in variables
  2. Calculate both their BMIs
  3. Create a boolean variable containing information about whether Mark has a higher BMI than John,
  4. Print a string to the console containing the variable from step3.
     (Somethin like "Is Mark's BMI higher than John's? true").

  GOOD LUCK
 

  var johnMass, johnHeight, markMass, markHeight;

  johnMass = 80;
  johnHeight = 1.75;
  markMass = 95;
  markHeight = 1.72;

  johnBMI = johnMass / (johnHeight * johnHeight);
  markBMI = markMass / (markHeight * markHeight);
  console.log(johnBMI, markBMI);

  var compare = johnBMI > markBMI;

  console.log('Is John BMI higher than Mark\'s? ' + compare);
   */

   /********************************
    * IF / else statements
    

var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married!');
}else{
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var johnMass, johnHeight, markMass, markHeight;

johnMass = 80;
johnHeight = 1.75;
markMass = 95;
markHeight = 1.72;

johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);

if(johnBMI > markBMI){
    console.log('Mark\'s BMI is higher than Jons\'s.');
}else{
    console.log('John\'s BMI is higher than Mark\'s.');
}

//var compare = johnBMI > markBMI;
//console.log('Is John BMI higher than Mark\'s? ' + compare);

*/

/*****************************
 * Boolean Logic
 

 var firstName = 'John';
 var age = 20;

 if(age < 13){
     console.log(firstName + ' is a boy.');
 }else if(age >= 13 && age < 20 ){
     console.log(firstName + ' is a teenager.');
 }else if(age >= 20 && age < 30){
     console.log(firstName + ' is a young man.');
}else{
    console.log(firstName + ' is a man.')
 }
 */

 /****************************
  * The ternary operator and switch statements
 

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Stwitfch Statement
var job = 'instructor';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56
switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
 */

 /********************************
  * Truthy and Falsy values and equality operators
  */

// falsy values: undefined, null, 0 , '', NaN
// truthy values: NOT falsy values

var height = 0;

if(height || height === 0){
    console.log('Variable is defined');
}else{
    console.log('Variable has NOT been defined');
}