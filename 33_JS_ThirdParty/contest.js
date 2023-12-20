// 1)Which of the following CSS selectors has the highest specificity / prority?

// Element selector
// Class selector
// ID selector - answer
// Universal selector / Wildcard selector - *{}


// 2)How can you center your flex items along the main axis  /horizantal?

// align-self: center
// justify-content: center - answer
// justify-self: center
// align-items: center



// positions

// absolute, relative , static 

// 3)What is the primary difference between the CSS properties position: fixed; and position: sticky;?

// position: fixed; elements are always fixed in their position, while position: sticky; elements become fixed after a certain scroll point. - answer

// position: fixed; elements are affected by the surrounding content, while position: sticky; elements are not.

// position: fixed; elements are positioned relative to the viewport, while position: sticky; elements are positioned relative to their nearest positioned anestor




// 4)What is the default value for the position property?

// static - answer
// relative
// absolute
// fixed






// 5)flex-wrap allows you to do what?


// define the direction of how elements are positioned based on either row or column

// define how elements will wrap when the browser width is changed - ans

// define how to position elements vertically

// defines how position elements horizontally



// 6)Which of the following is a correct syntax for a media query in CSS?


// @media screen and (max-width: 768px) { ... } - answer

// @media (max-width: 768px) { ... }

// media-query: screen and (max-width: 768px) { ... }

// media (max-width: 768px) { ... }



// 7)Which of the following below is the output:

// var varName = 10;

// function b() {
//     console.log(varName);
// }

// function fn() {
//     var varName = 20;
//     b();
//     console.log(varName);
// } 

// fn();

// error
// 10 20  - ans
// 20 20
// 20 10



// 8)Which of the following below is the output::

// let a;

// console.log(a);

// function F() {
//   console.log(a);
//   a = 3;
// }

// a = 2;

// F();



// undefined 2  - ans
// 2 3
// undefined 3
// undefined undefined





// 9)Which of the following below is the output:?

// console.log(1);

// setTimeout(function () {
//     console.log(3);
// });

// console.log(4);

// setTimeout(function () {
//     console.log(2);
// });

// Promise.resolve().then(function () {
//     console.log(5);
// });

// console.log(6);

// 1 4 6 5 3 2 - ans
// 1 3 4 5 2 6
// 1 4 5 6 3 2
// 1 3 6 5 3 2




// 10)Which of the following below is the output:?

// setTimeout(() => console.log('timeout'), 0)

// Promise.resolve().then(() => console.log('promise'))

// timeout promise
// promise timeout  - ans
// timeout
// promise
// E.error



// 11)Why promises are better then callbacks. choose the below options?

// It solves problem of inversion of control

// microtask task queue has higher priority then callbbak queue

// promises can be resolved or rejected once in the life time after that there

// all of the above - ans




// 12)Which of the following below is the output:

// let cap = {
    // name: "Steve", 
    // age: 34,
    // isAvenger: true,
// }

// for (let key in cap) {
    // console.log(key, "", cap[key]);
// }

// error

// name Steve age 34 isAvenger true - ans

// name undefined age undefined isAvenger undefined

// No of the above



// 13)Which of the following below is the output:
// let a = 2;
        // {
        // let a = 3;
                // {
                // let a = 4;
                        // {
                        // let a = 5;
                        // console.log(a);
                        // }
                // console.log(a);
                // }
        // console.log(a);
        // }
// console.log(a);



// 5 4 3 2 - ans

// Error

// 2 3 4 5

// 2 2 2 2



// 14)Which of the following below is the output:

// real();

// function real() {
    // console.log("I am real. Always run me");
// }

// function real() {
    // console.log("No I am real one ");
// }

// function real() {
//  console.log("You both are wasted");
// }



// Error

// No I am real one

// You both are wasted  - ans

// I am real . Always run me










// Good way to write a function 

// let real = function() {
//     console.log("I am real. Always run me");
// }


// real();



// let real = function() {
//     console.log("No I am real one ");
// }

// let real = function()  {
//  console.log("You both are wasted");
// }




// JavaScript Interview Questions & Answers  - 450 questions

// https://github.com/sudheerj/javascript-interview-questions