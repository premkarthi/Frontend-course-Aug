// important interview Question
// 1. Hoisting 
// 2. Closure

// var a = 10
// console.log("6", a); // 10
// a = 100
// console.log("8", a); // 100


// let a = 10
// console.log("6", a); // 10
// a = 100
// console.log("8", a); // 100


// constant 
// const a = 10
// console.log("6", a); // 10
// a = 100
// console.log("8", a); // 100


// let result  // undefined

// Local Scope / Functional scope
// function fn1(a, b, c){
//     result = a + b + c;
//     console.log(result);
// }


// fn1(1, 2, 3)
// fn1(5, 10, 11)

// console.log(result);

// global Scope

// let result = 10 
// let result = 20
// console.log(result);




// Local Scope 

// let result = 40

// function fn2(){
//     let result = 20
//     console.log(result);
// }
// fn2()

// console.log(result);


//Hoisting
// Variable can be access before it has been init 

// console.log(result);
// var result = "Prem"


// Let and const Cannot access 'result' before initialization - Temperary dead zone
// console.log(result);
// const result = "Prem"


// function inner(){
//     a = 10
//     console.log(a); //10
// }
// inner()
// console.log(a); // 10


console.log("80", a); // und
var a = 10
console.log("82", a); // 10


function inner(){
    var a = 20
    console.log("88", a); //  20
}
inner()


// Types Functions

// normal
// arrow
// function expression
// imidiate invoke funciton