
// let element_h1 = document.createElement("h1");
// element_h1.innerText = "Sign in";
// element_h1.className = "title";
// document.getElementsByTagName("div")[0].appendChild(element_h1);

// let container_one = document.createElement("div");
// container_one.className = "box_one";
// document.getElementsByTagName("div")[0].appendChild(container_one);

// let element_one = document.createElement("input");
// element_one.type = "email";
// element_one.className = "mail_id";
// element_one.placeholder = "example1@gmail.com";
// document.getElementsByTagName("div")[1].appendChild(element_one);

// let container_two = document.createElement("div");
// container_two.className = "box_two";
// document.getElementsByTagName("div")[0].appendChild(container_two);

// let element_two = document.createElement("input");
// element_two.type = "password";
// element_two.className = "pswd";
// document.getElementsByTagName("div")[2].appendChild(element_two);

// let element = document.createElement("button");
// element.innerText = "submit";
// element.className = "submit_button";
// document.getElementsByTagName("div")[0].appendChild(element);


// Solution 1

// let title = document.createElement("h1")
// title.innerText = 'Login'
// let root = document.querySelector('.root')
// root.appendChild(title)


// let input = document.createElement('input')
// input.placeholder = 'Username'
// root.appendChild(input)

// let password = document.createElement('input')
// password.placeholder = 'Password'
// root.appendChild(passwordpassword)

// let button = document.createElement("button")
// button.innerText = 'Submit'
// root.appendChild(button)



// Solution 2

// let element = `<h1>Login</h1>
//                 <input type="text" placeholder="Username" />
//                 <input type="password" placeholder="Password" />
//                 <button>Submit</button>
//                 `

// document.querySelector('.root').insertAdjacentHTML('afterbegin', element)