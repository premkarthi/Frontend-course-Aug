// Generetors function 

// MAP 
// ES6 

function* fun(){

    console.log(1)
    console.log(2)

    yield "I am first"

    console.log(3)
    console.log(4)

    yield "I am Second"

    console.log(5)
    console.log(6)

    yield "I am Third"

    console.log(7)
    console.log(8)

}

let genertor = fun()


console.log(genertor.next().value)

console.log(genertor.next().value)

console.log(genertor.next().value)


console.log(genertor.next())


