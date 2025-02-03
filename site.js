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

localStorage.setItem("It's a secret to everybody.", "So it's not secret at all?")
//I don't know what this references, what the string is is my current guess, I'm looking it up now
//oh it's from the Legend of Zelda, I know those games well but have barely played them