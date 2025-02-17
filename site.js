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


manuallyChanged = false //were the imgs in the carousel manually changed recently (with the btns)

/*
currently this solution works by having the interval do a full interval before continuing
when the prev/next buttons are pushed
to prevent the situation where the interval changes the image very shortly after a button was pressed
this effectively means that there will be at least 5 seconds of time after a button is pressed before the interval fires
but, this also effectively means there could be up to 9.9999999... seconds before the interval fires
*/

function moveImgs(num){
    if (num === undefined){
        if (manuallyChanged){
            manuallyChanged = false
            num = 0
        } else{
            num = 1
        }
    }
    currentImage += num
    showImages()
}

const btnNext = document.querySelector('#next')
btnNext.addEventListener('click', ()=>{
    manuallyChanged = true
    moveImgs(1)})

const btnPrev = document.querySelector('#prev')
btnPrev.addEventListener('click', ()=>{
    manuallyChanged = true
    moveImgs(-1)})

setInterval(()=>{
    moveImgs()
    showImages()
}, 5000)


localStorage.setItem("It's a secret to everybody.", "So it's not secret at all?")
//I don't know what this references, what the string is is my current guess, I'm looking it up now
//oh it's from the Legend of Zelda, I know those games well but have barely played them