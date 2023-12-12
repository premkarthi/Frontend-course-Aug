// function runMlalgo(amount, cb) {
//     setTimeout(function () {
//         console.log("payment done");
//         cb();
//         cb();
//         cb();
//         cb();
//         cb();
//         cb();
//         cb();
//         cb();
//     }, 1000);
// }

function pRunMLalgo() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("payment done");
            reject("Due to some problem Promise rejected");
            resolve()
        }, 1000);
    })
}


module.exports = {
    pRunMLalgo
}


