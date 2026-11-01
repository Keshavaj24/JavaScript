const accountId = 110023    // fixed value;
let accountName = "Keshava J"
let accountState;
var accountCity = "Bengaluru"
accountEmail = "keshava@gmail.com"  // always include var type. "let" or "const"

/* 
Prefer not to use 
var - because of issue in block scope and functional scope
Don't write variable name without type.
*/

/*
accountId = 11223305    // not allowed to change const values
console.log(accountId); // throws TypeError
*/


console.table([accountId, accountName, accountCity, accountEmail, accountState])



