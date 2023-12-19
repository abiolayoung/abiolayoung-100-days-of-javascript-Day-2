"use strict"
//let keyword is used to declare varible in javascript
let message;

message = "hello";
console.log(message)

//single line variable
let user = "abiola", age = 25, height = 25, info = "hello";

// // //seperate line variable

let user2 = "adeniyi";
let year = 35;
let school = "Altschool Africa";

// // //keyword VAR is used to declare variable in the old javascript

// // //replacing variable

let bank = "GTB";
bank = "Kuda MFB";
console.log(bank)

// // //declaring variable into varible

let girlFriend = 'princess';
let wife = girlFriend;
console.log(wife)
console.log(girlFriend)

// // //variable name must only contain letters, digits, or the symbols $ and _ the first character must not a digit.

// // //reserved word like let, return, function etc. cannot be used as a variable name

let $ = 1000
console.log($)

let $dollar = 2000
console.log($dollar)

// //Data-Types- there are 8 different types of data in javascript
// //Number 

let n = 344
n = 3.223433
console.log(n)

// // infinity number occurs when you try to divide any number by 0
console.log(n/0)
//negative -infinty occurs when you try to divide negative number by 0
console.log(-n/0)
//NaN occurs when you try to divide a string by number
console.log("princess"/4)

// //BigINT - 
// //number greater than (2^53-1) is autonmatically classified under BigINT e.g

console.log(5660544066666666694999999999999999999939999999999999999999n)//the n is used for us to have the bigINT value

//string
let age = 31
let str = `I am ${age} years old`;
console.log(str)
// // for string- we can either used single quote or double quote- we can embed variable in a string variable by using the backtick

// //BOOLEAN- this data type can either be true of force
 let isMarried = false
 console.log(isMarried)

 //null value - no value data-type, it represent an empty variable
 let age = null
 console.log(age)

 //undefined data-type, this is when your variable has been delcared but not defined

 let school 
 console.log(school)

 //object- used to stored collection of data and more complex entities.

let user = {
    firstName: "abiola",
    lastName: "adeniyi",
    age: 25,
    school: "Altschool Africa",
    password: "ableGOD200"
}

console.log(user)

//symbols is used to create a unique identifier
