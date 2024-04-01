let homeCountEl = document.getElementById("home-count")
let guestCountEl = document.getElementById("guest-count")
let homeCount = 0
let guestCount = 0


function homeAdd1(){
    homeCount += 1
    homeCountEl.textContent = homeCount
}

function homeAdd2(){
    homeCount += 2
    homeCountEl.textContent = homeCount
}

function homeAdd3(){
    homeCount += 3
    homeCountEl.textContent = homeCount
}

function guestAdd1(){
    guestCount += 1
    guestCountEl.textContent = guestCount
}

function guestAdd2(){
    guestCount += 2
    guestCountEl.textContent = guestCount
}

function guestAdd3(){
    guestCount += 3
    guestCountEl.textContent = guestCount
}

function newGame(){
    homeCount = 0
    homeCountEl.textContent = 0
    guestCount = 0
    guestCountEl.textContent = 0
}

