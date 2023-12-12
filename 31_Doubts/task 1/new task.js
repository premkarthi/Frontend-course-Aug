document.getElementById("Add_Button").addEventListener("click",function(){
    document.querySelector(".popup_container") .style.display = "flex";
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup_container").style.display="none";
}) //above two document is to function the button


let title = document.getElementById('title')
let description = document.getElementById('description')
let date = document.getElementById('date')
let values = document.querySelectorAll('input[name="priority"');

//above one, it is popup content that we have used in the html like id that 
//we have stored in the 'variable' like title,description,date,value
let allTasks = JSON.parse(localStorage.getItem('task')) || []
//exchange a data to/from  a web server
//and store in the alltask

document.querySelector(".popup_button").addEventListener("click",function(){

    let priority = Array.from(values).find(radio => radio.checked)
    //in the popbutton we store the value in the priority that radio value
  

    let data = {
        id : Math.floor(Math.random() * 100)+1,
        title : title.value,
        description: description.value,
        date: date.value,
        priority: priority.id,
        status: 'done'
         //object that done key and value pair 
    }
    allTasks.push(data)

    localStorage.setItem('task', JSON.stringify(allTasks))
    //that data heve been set into the lockstorage

    updateUI()
    title.value= ''
    description.value = ''
    data.value = ''
    //it shouldnit be empty

    values.forEach(value => {
        value.checked = false
    })
    document.querySelector(".popup_container").style.display="none";
})

let todo = document.querySelector('.todoList')
let done = document.querySelector('.doneList')
let inprogress = document.querySelector('.inprogressList')
let review = document.querySelector('.reviewList')

function updateUI(){

    todo.innerHTML = ''
    done.innerHTML=''
    inprogress.innerHTML=''
    review.innerHTML=''



    allTasks.forEach((task) => {
        let element = `<div class= "sub_box"> 
                      <h5 class = "common_heading">${task.title}</h5>
                      <p>${task.description}</p>
                      <div class="common_content">
                        <button class="common_button boxone_color">${task.priority}</button>
                      </div>
                    </div>`

        if(task.status == 'done'){
            done.insertAdjacentHTML('beforeend', element)
        }
        else if(task.status == 'todo'){
            todo.insertAdjacentHTML('beforeend' , element)
        }
        else if(task.status == 'inprogress'){
            inprogress.insertAdjacentHTML('beforeend',element)
        } 
        else if(task.status == 'review'){
            review.insertAdjacentHTML('beforeend',element)
        }

 })

}

updateUI()

let boxes = document.querySelectorAll('.box')
let dragabbleElement = null

boxes.forEach((box)=>{
    box.addEventListener('dragstart' , function(event){
        dragabbleElement = event.target
        event.target.style.opacity = '0.7'
    })

    box.addEventListener('dragover',function(event){
        event.preventDefault()
    })

    box.addEventListener('drop',function(event){
        if(dragabbleElement){
            box.appendChild(dragabbleElement)
        }
    })

    box.addEventListener('dragend',function(event){
        event.target.style.opacity = '1'
        let id = event.target.id
        let status = box.classList[2]

        let findIdx = allTasks.findIndex((item)=> item.id == id)
        allTasks[findIdx].status = status
        localStorage.setItem('task', JSON.stringify(alltask))

    })
})
