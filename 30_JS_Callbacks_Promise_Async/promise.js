// States => pending, fullfiled, rejected 


// let promise = new Promise(function(resolve, reject){
//     try {
//         let greetings = "Values Resolved from Promise"
//         resolve(greetings)
//     } catch (error) {
//         reject("Error From Promise Rejected")
//     }
// })


// promise.then((data) => console.log(data)).catch((error)=> console.log(error)).finally(()=> console.log("Finally Updated"))


//Promise Chaining

// promise.then((data)=> {
//     console.log(data); // Values Resolved from Promise
//     let fil2 = "SomeData 2"
//     return fil2
// }).then((data)=> {
//     console.log(data); // SomeData 2
//     throw new Error('Error From Third Block');
// }).then((data)=>{
//     console.log(data);  //undefined
// }).catch((error)=>{
//     console.log(error) //Values Resolved from Promise
// }).finally(()=>{
//     console.log("Finnay")
// })


// async function fn1(){
//     try {
//         let data = await promise  
//         let file2 = await data 
//         let file3 = await file2

//         console.log(file3);
//     } catch (error) {
//         console.log("Catch", error)
//     }
// }





//Exceptional handling
// try {
//     let hello = name 
// } catch (error) {
//     console.log("Catch",error);
// }


// Fetch Data From API 
let promise = new Promise(function(resolve, reject){
    try {
        let response =  fetch('https://jsonplaceholder.typicode.com/todos/').then((data)=>data.json())
        resolve(response)
    } catch (error) {
        reject("Error From Promise Rejected")
    }
})

let root = document.querySelector('.root')

promise.then((todos)=>{
    todos.forEach(item => {
        let element = document.createElement('div')
        element.innerHTML = item.title
        root.appendChild(element)
    });
})


