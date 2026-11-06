

const accountId = 110023    // cannot be reassigned
let accountName = "Keshava J"   // can be reassigned

let accountState;
var accountCity = "Bengaluru" // Prefer not to use
accountEmail = "keshava@gmail.com"  // always include variable type. "let" or "const"

/* 
Prefer not to use 
var - because of issue in block scope and functional scope
Don't write variable name without type.
*/

/*
accountId = 11223305    // TypeError: Assignment to constant variable.
*/


console.table([accountId, accountName, accountCity, accountEmail, accountState])

/*
Const locks the variable from being reassigned, not the content of the object.
*/
const user = { name: "Keshava"}
user.name = "Veda"  // allowed!

// user = { age: 20}    // Error: Assignment to constant variable
console.log(user);

