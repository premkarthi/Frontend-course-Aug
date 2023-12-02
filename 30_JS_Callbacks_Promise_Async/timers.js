/***** setTimeout -> clearTimeout****/


// function fn1(){
//     let greetings = 'Hello from function'
//     console.log(greetings);
// }
// let timer = setTimeout(fn1, 5000)

// clearTimeout(timer, 4000)



/***** setInterval, clearInterval ******/

function fn1(){
    // let greetings = 'Hello from function'
    let date = new Date()
    console.log(date.toString());
}

let timer = setInterval(fn1, 1000)


function clearInr(){
    clearInterval(timer)
}

setTimeout(clearInr, 5000)