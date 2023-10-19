var a = 10
var b = 20

//Just to print the value
// console.log("Hello world")
// console.log("Hello world 2")

var result = a + b  // 30

console.log(result++);  // 30 + 1 -> Post increament 

console.log(++result); // 1 + 31 -> Pre increament


console.log(++a); // 11
console.log(a); // 11


console.log(5 % 2);


console.log("============================");


var c = 50

// c = c + 40
c += 40

c = c - 10
// c -= 10

console.log(c);

console.log("============================");


// It just check the value 
// console.log(10 == '10'); 

// Its checks both value and data type
// console.log(10 === '10'); 

// Task 
// 1. Which all are falsy value in javascript 

var d = "prem" //string

console.log(typeof d);


// " != & !== its just opposite of == & === "
// It just check the value 
console.log(10 != '10');


// Its checks both value and data type
console.log(10 !== '10');


console.log(50 > 100);
console.log(100 < 200)



console.log("============================");



console.log(50 >= 50); // true
console.log(100 <= 200) // true


console.log("============================");

var condition = false

// if (condition) {
//     console.log("I am If block")
// }else{
//     console.log("I am else block")
// }

condition ? console.log("I am If block") : console.log("I am else block")





