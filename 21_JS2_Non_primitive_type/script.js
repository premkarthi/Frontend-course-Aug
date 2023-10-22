// Non Primitive Data types


// Arrays


// var marks = [100, 200, 300, 400]
var marks = [100, "Prem", "karthi", 1000, 200, true, 12.22, ["Bangalore", "Chennai"], {'pin code': 560045}]

// console.log(marks);

// Reading
// console.log(marks[1]);


//updation
// marks[1] = 1000


// console.log(marks[8]['pin code']);


// delete

// delete marks[1]

// marks.pop()
// marks.shift()


// marks.push("Newly added")

marks.unshift("Added in the first index")

// console.log(marks);


var user = {
    name: "your name",
    phone : 12344556,
    address: {
        pincode: 122344,
        pincode2: 234344
    },
    extra: false
}


//1. Read the name
// console.log(user.name)
//2. Read the pincode2
// console.log(user.address.pincode2)
//3. Update the phone to 98765443
// user.phone = 98765443
//4  Add city inside the address as a Bangalore
// user.address.city = "Bangalore"
//5. Delete extra key in the obj
// delete user.extra


// console.log(user);




// Functions

// Normal Functions

// function sumofElements(a, b ,c){
//     var result  = a + b + c
//     return result
// }


// var answer = sumofElements(1,3,4) // 8

// var answer2 = sumofElements(10, 20, 30)

// console.log(answer2);


// Rules 
// If user age is >= 18 then allow
// otherwise Nope 

// console.log(isEligible(20));

// function isEligible(age){
//     if(age >= 18){
//         return 'Allowed'
//     }
//     else{
//         return 'Not Allowed'
//     }
// }


// console.log(isEligible(10));



// Funcion Expression 

// console.log(isEligible(20));


// var isEligible = function(age){
//     if(age >= 18){
//         return 'Allowed'
//     }
//     else{
//         return 'Not Allowed'
//     }
// }

// console.log(isEligible(20));




// IIF 
// console.log(
//     (function(age){
//         if(age >= 18){
//             return 'Allowed'
//         }
//         else{
//             return 'Not Allowed'
//         }
//     })(17)
//     );




// Arrow function

// var isEligible = (age) => age >= 18 ? 'Allowed' : 'Not Allowed'

// console.log(isEligible(15));




// arguments

//Spread Operatos
// function sumofElements(...arguments){
//     console.log(arguments);
// }

// sumofElements(1,3,4,5,5)
// sumofElements(1)
// sumofElements(1,2,3)




// this is how we pass default value 
function sumofElements(a = 0, b = 0, c = 0){
    console.log(a + b + c);
    return a + b + c
}

sumofElements(1,3,5)  // 9
sumofElements(1)      // 1
sumofElements(1,2,3)  // 6




// 1 . Create Normal function 
// 2. Funcion should be multiple
// 3 .pass three arguments and multiply and return them