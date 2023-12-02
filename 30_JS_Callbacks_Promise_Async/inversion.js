const { pRunMLalgo } = require("./algo");


// Trust Issue -> Interversion of control  

console.log("Before");
let amount = 100;
let priceofOne = 20;


function cb() {
    amount = amount - priceofOne;
    console.log("Amount: ", amount);
}

let promise = pRunMLalgo()

promise.then(cb).catch((error)=>console.log(error))