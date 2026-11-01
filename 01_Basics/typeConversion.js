"use strict";
// Type conversion

let score = true

console.log(score)
console.log(typeof score);

// Conversion to number 
let valueInNumber = Number(score)   // string value to Number conversion
console.log();

console.log(valueInNumber);
console.log(typeof valueInNumber);

/*
OUTPUTS Validation:
"33" => 33
"33abc" => NaN
null => 0
undefined => NaN
true => 1
false => 0
*/

let loggedIn = 123

// convert to boolean values
let booleanIsLoggedIn = Boolean(loggedIn)
console.log(booleanIsLoggedIn)

/*
1 => true | 0 => false
"Abhi" => true
123 => true
"" => false
null => false
undefined => false
*/

let num = 2;

// convert to string values
let stringValues = String(num)
console.log(stringValues)
console.log(typeof stringValues);

