
function napraviToDoElement (task){
    const inputTask = document.querySelector("#task")
    inputTask.value = "" // brise predhodno uneti sadrzaj iz <inputa>
    const pTask = document.createElement("li") // kreira element <li>
    pTask.innerText = " - " + task 
    const btnSetComplete = document.createElement("button")// kreira element <button>
    btnSetComplete.innerText = "✔"
    btnSetComplete.classList.add("task-button", "complete")// kreira css klasu
    const btnDelete = document.createElement("button")
    btnDelete.innerText = "✘"
    btnDelete.classList.add("task-button", "delete") // kreira css klasu
    pTask.append(btnSetComplete, btnDelete) // postavlja kreirane elemente u HTML
    btnDelete.addEventListener("click", (e) => {
        // pTask.remove()
        e.target.parentNode.remove() // uklanja zadatak iz liste
    })
    btnSetComplete.addEventListener("click", (e) => {
        const divDone = document.querySelector("#done")
        divDone.append(e.target.parentNode) // premesta element iz "to-do" u "done"
        e.target.remove() // uklanja "complete" ikonicu
        //console.log(e.target)
        //console.log(e.target.parentNode)
    })
    return pTask
}

// dohvatanje "hardkodovanih" elemenata HTML

const inputTask = document.querySelector("#task")
const btnAdd = document.querySelector("#add")
const divTodo = document.querySelector("#to-do")
const divDone = document.querySelector("#done")

// postavljanje zadatka iz unosa

btnAdd.addEventListener("click", () => {
    const task = inputTask.value 
    const pTask = napraviToDoElement(task)
    divTodo.append(pTask)
})