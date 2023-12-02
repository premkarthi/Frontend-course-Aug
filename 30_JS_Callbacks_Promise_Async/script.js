
const fs = require("fs");


// synchronous

console.log("Before");
const file = fs.readFileSync("./f1.txt");
console.log("" + file);
console.log("After");


/****
 *
 * Asynchrouns function to read a file
 *
 * */
// console.log("Before");
// fs.readFile("./f.txt", function (err, data) {
//     if(err){
//         console.log("SomeError")
//         return
//     }
//     console.log("" + data);
// });
// console.log("After");


/***
 * 1. you can block the main thread 
 * 2. given  2 files -> read them  and 
 * 3. give me the concatenated result in the order for the file supplied
 * */

// console.log("Before");
// let content1 = fs.readFileSync("./f1.txt");
// let content2 = fs.readFileSync("./f2.txt");
// console.log("" + content1 + "  " + content2);
// console.log("after");


/***
 * 1. you can't block the main thread 
 * 2. given  2 files -> read them  and 
 * 3. give me the concatenated result in the order for the file supplied
 * */



// console.log("Before");


// Callback Hell 
// fs.readFile("./f1.txt", function(err, data){
//     fs.readFile("./f2.txt", function(err, data1){
//         console.log("" + data + data1);
//     });
// });


// console.log("after");
