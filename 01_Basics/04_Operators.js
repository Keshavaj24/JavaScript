/* 
Operators: + | - | * | / | % | ** |

console.log(3 + 3)
*/

let str1 = "Keshava"
let str2 = " Jayaram"
let str3 = str1 + str2

// console.log(str3)

// console.log((2 + 3) * (5 / 2))

//Prefer not to use this type of code
// console.log("1" + 2 + 2)    
// console.log(1 + 2 + "2")    
// console.log(+true)
// console.log(+false)
// console.log("2" + 23 + "2a")

// Post Increment
let x = 3
const y = x++ 
console.log(`x:${x} | y:${y}`)  
/* 
Steps: 
1. Use the current value of "x" = 5
2. Assign that value to y 
3. then increment x by 1
*/

// Pre Increment 
let z = 3 
let l = ++z
console.log(`z:${z} | l:${l}`)  
/* 
Steps: 
1. First, increment z by 1
2. then use the updated value
3. assign that value to z
*/


