// Lecture: let and const

// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// // ES5
// function driverLicence5(passedTest){
//     if(passedTest){
//         console.log(firstName);
//         var firstName = 'Jhon';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowd to drive a car');
// }

// driverLicence5(true);

// // ES6

// function driverLicence6(passedTest) {
//     console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1990;

//     if (passedTest) {
//         firstName = 'Jhon';
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowd to drive a car');
// }

// driverLicence6(true);




// let i = 23;

// for(let i = 0; i < 10; i ++){
//     console.log(i);
// }

// console.log(i);


///////////////////////////////////////////////////////
// Lecture: Blocks and IIFEs

// // ES 6
// {
//     const a = 1;
//     let b = 2;
//     var c = 3;
// }

// //console.log(a, b);
// console.log(c);

// // ES5
// (function(){
//     var c = 3;
// })();

// //console.log(c);

///////////////////////////////////////////////////////////
// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + 
            '. Today, he is ' +calcAge(yearOfBirth) + ' years old.');


// ES6
console.log(`This is ${firstName} 
            ${lastName}. He was born in 
            ${yearOfBirth}. Today, he is 
            ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));