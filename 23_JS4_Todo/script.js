
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let submit = document.getElementById('submit')


function formSubmitted(e){
    e.preventDefault()

    if(username.value.length == 0){
        alert("User Name is empty")
    }
    else if(email.value.length == 0){
        alert("Email  is empty")
    }
    else if(password.value.length == 0){
        alert("password  is empty")
    }
    else{
        let user = {
            id : Math.floor(Math.random()* 1000),
            name : username.value,
            email : email.value,
            password : password.value
        }
    
        let li = document.createElement('li')
        let content = `${user.id} - ${user.name} -
                        <span>${user.email}</span> - 
                        ${user.password}  -
                        `

        li.innerHTML = content
        document.querySelector('ul').appendChild(li)

        username.value = ''
        email.value = ''
        password.value = ''
    }
}


submit.addEventListener('click', formSubmitted)



// next

// Delete() 
// Date()



// Do the same todo list with other fields
// 1. username
// 2. Mail 
// 3. Date
// 4. Select Option -> Degree
// 5. Checkbox - Preferred location -> Chennai, bangalore, Delhi
// 6. Radio - female, male
// 7. Submit


// Javascript Array Methods



