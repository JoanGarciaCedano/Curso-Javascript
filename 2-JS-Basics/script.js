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
 

// falsy values: undefined, null, 0 , '', NaN
// truthy values: NOT falsy values

var height = 0;

if(height || height === 0){
    console.log('Variable is defined');
}else{
    console.log('Variable has NOT been defined');
}
 */

 /*******************************+
  *  CODING CHALLENGE 2

  John and Mike both play basketball in different teams.
  In the latest 3 games, John's team scored 89, 120 and 103 points,
  while Mike's team scored 116, 94 and 123 points.

  1. Calculate the average score for each team
  2. Decide which teams wins in average (highest average score), and 
  print the winner to the console. Also include the average score in the output.
  3. Then change the scores to show different winners.
  Don't forget to take into account there might be a draw (the same average score).

  4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points.
  Like before, log the average winner to the console. HINT: yuo will need 
  the && operator to take the decision. If you can't solve this one, just watch the solution,
  it's no problem
  5. Like before, change the scores to generate differnt winners, keeping in mind there might be draws.

  

var johnScore1, johnScore2, johnScore3, johnAverage, mikeScore1, mikeScore2, mikeScore3, mikeAverage,
maryScore1, maryScore2, maryScore3, maryAverage;

johnScore1 = 89;
johnScore2 = 120;
johnScore3 = 103;
johnAverage = (johnScore1 + johnScore2 + johnScore3) / 3;

mikeScore1 = 116;
mikeScore2 = 94;
mikeScore3 = 123;
mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;

maryScore1 = 97;
maryScore2 = 134;
maryScore3 = 105;
maryAverage = (maryScore1 + maryScore2 + maryScore3) / 3;
console.log(johnAverage, mikeAverage, maryAverage);

if(johnAverage > mikeAverage && johnAverage > maryAverage){
    console.log('John\'s Team is the winner with ' + johnAverage + ' points');
}else if (mikeAverage > johnAverage && mikeAverage > maryAverage){
    console.log('Mike\'s Team is the winner with ' + mikeAverage + ' points');
}else if(maryAverage > johnAverage && maryAverage > mikeAverage){
    console.log('Mary\'s Team is the winner with ' + maryAverage + ' points');
}else{
    console.log('There is a draw');
}

*/

/***************************
 * Functions
 

 function calculateAge(birthYear){
     return 2019 - birthYear;
 }

var ageJhon = calculateAge(1991);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJhon, ageMike, ageJane);


function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }else{
        console.log(firstName + ' is already retired');
    }

    
}

yearsUntilRetirement(1991, 'Joan');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/**************************************
 * Function Statements and Expressions
 

//Function declaration
//function whatDoYouDo(job, firstName){}

//Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }   
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('retired', 'Mike'));
console.log(whatDoYouDo('designer', 'Jane'));
*/

/******************************
 * Arrays


 var names = ['John', 'Mike', 'Jane'];
 var years = new Array(1990, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 //Mutate array data
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);

 //Different data types
 var john = ['John', 'Smith', 1990, 'designer', false];

 john.push('blue');
 john.unshift('Mr.');
 console.log(john);
 
 john.pop();
 john.pop();
 john.shift();
 console.log(john);

 console.log(john.indexOf(1990));


 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
 console.log(isDesigner);

  */


  /******************************
   * CODING CHALLENGE 2
   */
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124,
$48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to
tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and
10% if the bill is more than $200

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(Note: To calculate 20% of a value, simply multiply if with 20/100 ) 0.2

GOOD LUCK
*/

var calculateTip = function(amount){
    if(amount < 50){
        return 0.2 * amount;
    }else if(amount >= 50 && amount <= 200){
        return 0.15 * amount;
    }else if(amount > 200){
        return 0.1 * amount;
    }else{
        return -1;
    }
}

var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
