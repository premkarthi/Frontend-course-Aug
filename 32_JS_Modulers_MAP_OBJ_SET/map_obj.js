
// 1 way 

// let obj = {
//     name : "Prem",
//     location: "Bangalore",
//     role: "Something"
// }

// obj.name = "NewName"
// delete obj.role
// obj.age = 23


// array size 
// let arr = [1,3,4,5]

// console.log(arr.length);


// let listOfkeys = Object.keys(obj)
// console.log(listOfkeys.length)

// console.log(obj)


// 2 way

// let mapObj = new Map()


// mapObj.set("name", "Karthi")
// mapObj.set("location", "Bangalore")

// console(mapObj.get("location"))

// mapObj.delete('location')

// console.log(mapObj.has("name"))

// console.log(mapObj.size);


// arr 
// finding elements take length of the array 
// updating elements take length of array
// let alArr = ["1", "a", "b" , "x" , "d", "e", "c"] 


// obj 
// finding elements take only i itearation

// let alpahates = new Map()

// alpahates.set('a', true)
// alpahates.set('b', true)
// alpahates.set('c', true)
// alpahates.set('d', true)
// alpahates.set('e', true)


// console.log(alpahates.has("c"));

// console.log(alpahates);




// HOF - high order function 

let arr = ["name1","name2","name3","name4","name5","name6","name7","name8",]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }


// arr.forEach((item) => {
//     console.log(item)
// })

// let finalArr = arr.map((item)=> {
//     return item + 'Suf'
// })

// console.log(finalArr);


// filter 
// find 
// reduce 


let obj = {
    name : "Prem",
    location: "Bangalore",
    role: "Something"
}

// iteration for normal obj 
// only supports for in loop
// it wont support HOF 

// for (const key in obj) {
//     const element = obj[key];
//     console.log(element);
// }

// obj.forEach(element => {
//     console.log(element); 
// });



// Iteration map 
// its supports all the HOF 
// for in loop wont work 


let mapObj = new Map()
mapObj.set("name", "Karthi")
mapObj.set("location", "Bangalore")

// mapObj.forEach((element, index) => {
//     console.log(element, index); 
// });

// console.log(mapObj);

// for (const key in mapObj) {
//     const element = obj[key];
//     console.log(element);
// }


// final diffrence 
// map obj we cant stringify 


console.log(JSON.stringify(obj));
console.log(JSON.stringify(mapObj));





// map can store any kind of data type for key 
let user1 = {id: 1, name: 'Prem'}
let user2 = {id: 2, name: 'Prem1'}
let user3 = {id: 3, name: 'Prem2'}


let userDetails1 = {address: "Bangalore"}
let userDetails2 = {address: "Bangalore"}
let userDetails3 = {address: "Bangalore"}


let userDetails = new Map()

userDetails.set(user1, userDetails1)
userDetails.set(user2, userDetails2)
userDetails.set(user3, userDetails3)


console.log(userDetails);