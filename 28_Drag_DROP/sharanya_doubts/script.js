// From close and Open 
function openForm() {
  document.getElementById("form-container").style.display = "block";
}

function closeForm() {
  document.getElementById("form-container").style.display = "none";
}


// get the input valuse from DOM 
let title = document.getElementById("title");
let description = document.getElementById("description");
let date = document.getElementById("dateField");
let values = document.querySelectorAll('input[name="priority"]');


// 6. onload get the data from localStorage and store it one variable
let allTasks = JSON.parse(localStorage.getItem("task")) || [];


function submitForm() {

  // find the checked radio button in the form
  let priority = Array.from(values).find(radio => radio.checked);

  // combine all the task inside one obj -> so that we can easily structure the data 
  let task = {
    title: title.value,
    description: description.value,
    date: date.value,
    priority: priority.name,
    status: "todoList",
  };

  // push the new task obj inside global variable 
  allTasks.push(task);

  // update all tasks in localStorage
  localStorage.setItem("task", JSON.stringify(allTasks));

  // display those tasks in UI / DOM 
  displayTasks();

  // after submit reset the form 
  title.value = "";
  description.value = "";
  date.value = "";

  values.forEach((value) => {
    value.checked = false;
  });

  // hide the form 
  document.querySelector("#form-container").style.display = "none";
}



let todo = document.querySelector(".todoList");
let done = document.querySelector(".doneList");

function displayTasks() {
  todo.innerHTML = "";

  allTasks.forEach((task) => {
    let taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
                  <h5>${task.title}</h5>
                  <p>${task.description}</p>
                  <p>${task.date}</p>
                  <button class="common_button">${task.priority}</button>
                `;
    if(task.status == 'todoList'){
        todo.appendChild(taskElement)
    }
    else if(task.status == 'doneList'){
        done.appendChild(taskElement)
    }
  });
}
displayTasks();





// Statement
// 1. Create Proper UI with resonsive
// 2. Remove all the dummy html tasks 
// 3. get all the values from the form - 4 input 
// 4. store all the value inside on obj
// 5. On submit of form - push the data to one global arry and then update localStorage
// 6. onload get the data from localStorage and store it one variable
// 7. Create task in html using javascript and then update the UI/DOM 



// console.log("Start");

// setTimeout(()=>{console.log("Hi")}, 1000)
// setTimeout(()=>{console.log("Hi 2")}, 2000)
// setTimeout((()=>{console.log("Hi 3")})(), 3000)

// console.log("End");



// var firstname = 10
// function fn(){
//   console.log(this.firstname)
// }


// var obj = {
//     firstname : 20,
//     method : function(fn){
//       fn()
//       arguments[0]()
//     }
// }

// obj.method(fn, 1, 2)


class TrieNode {
  constructor(){
    this.children = new Map(),
    this.endOfWord = false
  }
}

class Trie {
  constructor(){
    this.root = new TrieNode()
  }

  insert(word){
    let currentNode = this.root
    for (let i = 0; i < word.length; i++) {
        let char = word[i].toLowerCase()
        if(!currentNode.children.has(char)){
          currentNode.children.set(char, new TrieNode())
        }
        currentNode = currentNode.children.get(char)
    }
    currentNode.endOfWord = true
  }

  search(prefix){
    let currentNode = this.root
    let result = []
    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i].toLowerCase()
      if(currentNode.children.has(char)){
          currentNode = currentNode.children.get(char)
      }else{
        return result
      }
    }
    this.collections(currentNode, prefix, result)
    return result
  }
  collections(node, prefix, result){
    if(node.endOfWord){
      result.push(prefix)
    }
    for(const [char, childNode] of node.children){
     
      this.collections(childNode, prefix + char, result)
    }
  }
}

let trie = new Trie()

console.log(trie);
fetch('../data.json')
    .then(response => response.json())
    .then(data => {
    data.forEach(item => {
        trie.insert(item.name);
    });
})
.catch(error => {
    console.error('Error fetching API data:', error);
});



// setTimeout(()=>{
//   let result = trie.search("All")
//   console.log(result);
// }, 3000)



const promise3 =  Promise.reject("Error");
const promise1 =  Promise.resolve("1");
const promise2 =  Promise.resolve("2");

Promise.any([promise3, promise1, promise2])
  .then(results => console.log(results))
  .catch(error => console.error(error));

