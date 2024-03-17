// NAPOMENA ova fungcija kreira element pTask u "memoriji", nije ovde append()-ovana u HTML !!! 
// samo je return u poziv ove fungcije tj. u postavljanje/kreiranje zadatka iz inputa
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
        // pTask.remove() .. obrisace ceo element, tj roditelja <li> ( pTask je <li> )
        e.target.parentNode.remove() // uklanja zadatak iz liste.. <button> je dete a <li> je parent
    })
    btnSetComplete.addEventListener("click", (e) => {
        const divDone = document.querySelector("#done")
        divDone.append(e.target.parentNode) // premesta element iz "to-do" u "done"
        e.target.remove() // uklanja "complete" ikonicu.. remove tog elementa, ne i roditelja 
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

// postavljanje/kreiranje zadatka iz unosa

btnAdd.addEventListener("click", () => {
    const task = inputTask.value 
    const pTask = napraviToDoElement(task) // slanje parametra u fungciju za pravljenje elementa, koja ce vratiti pTask
    divTodo.append(pTask) // ovde se element pTask iz gornje fungcije kreira/ubacuje u HTML !
})
