document.getElementById("main_button").addEventListener("click",function(){
    document.querySelector(".popup_container").style.display ="flex";
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup_container").style.display="none";
})



let title = document.getElementById('title')
let description = document.getElementById('description')
let date = document.getElementById('date')
let values = document.querySelectorAll('input[name="priority"]');


let allTasks = JSON.parse(localStorage.getItem('task')) || []



document.querySelector(".popup_button").addEventListener("click",function(){
    let priority = Array.from(values).find(radio => radio.checked)

    let data = {
        id: Math.floor(Math.random() * 100) + 1,
        title : title.value,
        description: description.value,
        date: date.value,
        prority: priority.id,
        status: 'todo'
    }
    allTasks.push(data)

    localStorage.setItem('task', JSON.stringify(allTasks))
    
    updateUI()
    title.value= ''
    description.value = ''
    date.value = ''

    values.forEach(value => {
        value.checked = false
    })
    document.querySelector(".popup_container").style.display= "none";
})


let todo = document.querySelector('.todoList')
let done = document.querySelector('.doneList')


function updateUI(){
    todo.innerHTML = ''
    done.innerHTML = ''
    allTasks.forEach((task) =>{
        let element =  `<div class="sub_box" draggable="true" id=${task.id}>
                         <h5 class="common_heading">${task.title}</h5>
                         <p>${task.description}</p>
                        <div class="common_content">
                            <button class="common_button boxone_color">${task.prority}</button>
                        </div>
                    </div>`

        if(task.status == 'done'){
            done.insertAdjacentHTML('beforeend', element)
        }
        else if(task.status == 'todo'){
            todo.insertAdjacentHTML('beforeend', element)
        }
        
    })
}

updateUI()



let boxes = document.querySelectorAll('.box')
let dragabbleElement = null

boxes.forEach((box)=> {

    box.addEventListener('dragstart', function(event){
        dragabbleElement = event.target
        event.target.style.opacity = '0.5'
    })

    box.addEventListener('dragover', function(event){
        event.preventDefault()
    })

    box.addEventListener('drop', function(event){
        if(dragabbleElement){
            box.appendChild(dragabbleElement)
        }
    })

    box.addEventListener('dragend', function(event){
        event.target.style.opacity = '1'
        let id = event.target.id
        let status = box.classList[2]

        let findIdx = allTasks.findIndex((item)=> item.id == id)
        allTasks[findIdx].status = status
        localStorage.setItem('task', JSON.stringify(allTasks))
    })

   
})

