"use strict"; // use JS new version

/* 
PRIMITIVE DATATYPES (Call by Value)

7 Types: Number, String, boolean, Undefined, null, Symbol, bigInt 

*/
const score = 100; // Number
let name = "Keshava"; // String
let isLoggedIn = false; // Boolean
let userName; //Undefined
let value = null; // object
let id = Symbol("123"); // Symbol

console.log(typeof isLoggedIn);
console.log(typeof value);

/*
NON-PRIMITIVE (Reference Type)

Arrays, objects, function

*/

const fruits = ["Apple", "Banana", "Cherry"]; // Array

// Inside the curly braces are called objects.
const myObj = {
  name: "Keshava J",
  age: 21,
  color: "Red",
};

// returntype: functionObject
let myFunction = function () {
  console.log("Hello, Function");
};

// why null returns typeof object?
