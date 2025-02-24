console.log('Connected to JavaScript file.')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcome = document.querySelector('#welcome')
if(isMorning){
welcome.textContent = 'Good Morning!'
}else if(isAfternoon){
welcome.textContent = 'Good Afternoon!'
} else if(isEvening){
welcome.textContent = 'Good Evening!'
} else{
    //An error has occured!
}

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()


cycles = 0

/*
This solution is the way it is to avoid the interval and the prev/next buttons interfering with eachother

initially, the interval could change the imgs right after a button was used - which is a problem
so next it was that using a button made the interval do nothing for its next cycle
so there would be at least 1 full interval's worth of time (5+ seconds) before the imgs cycled
but, this meant there could be nearly 2 full interval's worth of time (10 seconds) before the imgs cycled - which is a problem

so the new solution calls for the interval being 0.5 seconds long
and needing to increment a counter 10 times before it can adjust the imgs
the buttons then just reset the counter

so, instead of 0-5 or 5-10 seconds of wait before the interval changes the imgs, it's 5-5.5
*/

function moveImgs(num){
    if (num === undefined){
        if (cycles < 10){
            num = 0
            cycles++
        }
        if (cycles == 10){
            num = 1
            cycles = 0
        }
    }
    currentImage += num
    showImages()
}

const btnNext = document.querySelector('#next')
btnNext.addEventListener('click', ()=>{
    cycles = 0
    moveImgs(1)})

const btnPrev = document.querySelector('#prev')
btnPrev.addEventListener('click', ()=>{
    cycles = 0
    moveImgs(-1)})

setInterval(()=>{
    moveImgs()
    showImages()
}, 500)


localStorage.setItem("It's a secret to everybody.", "So it's not secret at all?")
//I don't know what this references, what the string is is my current guess, I'm looking it up now
//oh it's from the Legend of Zelda, I know those games well but have barely played them

//-------------------------------------------

// Get the list from local storage
let todos = JSON.parse(localStorage.getItem('todo-list')) || [
    { "text": "Learn how to walk on water", "completed": false },
    { "text": "Become the King of England", "completed": false },
    { "text": "Wear a silly hat", "completed": false }
]

const todoList = document.querySelector('.todo-list')

//on load
//  render

renderToDoList()

//on new item added
//  save
//  render

const newToDo = document.querySelector('#new-todo')
const btnAddToDo = document.querySelector('#btnAddToDo')
btnAddToDo.addEventListener('click', ()=>{
    // Add a new item to the list
    todos.push({ text: newToDo.value, completed: false })
    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
    renderToDoList()
    })

//def of redner
//  forEach

function renderToDoList(){
    // Clear the li's before we recreate them
    todoList.innerHTML = ''

    // Create and add new list items to the DOM
    todos.forEach((todo)=>{
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
    })
}

/*
//Provided Code
// Add a new item to the list
todos.push({ text: input.value, completed: false })

// Save the list to local storage
localStorage.setItem('todo-list', JSON.stringify(todos))

// Clear the li's before we recreate them
todoList.innerHTML = ''

// Create and add new list items to the DOM
const li = document.createElement('li')
li.textContent = todo.text
todoList.append(li)
*/