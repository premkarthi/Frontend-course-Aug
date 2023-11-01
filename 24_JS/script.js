let userList = []

let username = document.getElementById('username')
let email = document.getElementById('email')
let date = document.getElementById('date')
let degree = document.getElementById('degree')
let locationByuser = document.getElementById('location')
let gender = document.getElementById('gender')
let submit = document.getElementById('submit')

console.log(locationByuser);
submit.addEventListener('click', function(e){
        e.preventDefault()
        let selectedLocationValues = []
        let chennai = document.getElementById('chennai')
        let bangalore = document.getElementById('bangalore')
        let delhi = document.getElementById('delhi')

        if(chennai.checked){
            selectedLocationValues.push("chennai")
        }
        if(bangalore.checked){
            selectedLocationValues.push("bangalore")
        }
        if(delhi.checked){
            selectedLocationValues.push("delhi")
        }

        let genderValue = ""
        let male = document.getElementById('male')

        if(male.checked){
            genderValue = "Male"
        }else{
            genderValue = "Female"
        }

        let isValid = checkValidation(username, email, date, degree,selectedLocationValues, genderValue)


        if(isValid){
            let userObj = {
                username: username.value,
                email: email.value,
                date: date.value,
                degree: degree.value,
                locationByuser: selectedLocationValues,
                gender: genderValue,
            }
    
            userList.push(userObj)
            console.log(userList);
    
            username.value = ''
            email.value = ''
            date.value = ''
        }
     
})

function createError(input, parent){
    let element = document.createElement("div")
    element.style.color = 'red'
    element.style.marginTop = '10px'
    element.innerText = `${input} is Required`
    parent.appendChild(element)
}


function checkValidation(username, email, date, degree,selectedLocationValues, genderVal){

    if(username.value === '' ){
        createError(username.name, username.parentElement)
    }
    else if(email.value === ''){
        createError(email.name, email.parentElement)
    }
    else if(date.value === ''){
        createError(date.name, date.parentElement)
    }
    else if(degree.value === '-1'){
        createError(degree.name, degree.parentElement)
    }
    else if(selectedLocationValues.length === 0){
        createError("Location", locationByuser)
    }
    else{
        return true
    }
}