let homeScore = 0
let guestScore = 0
let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function add1PointHome() {
    displayHomeScore(homeScore += 1)
}

function add2PointHome() {
    displayHomeScore(homeScore += 2)
}

function add3PointHome() {
    displayHomeScore(homeScore += 3)
}

function add1PointGuest() {
    displayGuestScore(guestScore += 1)
}

function add2PointGuest() {
    displayGuestScore(guestScore += 2)
}

function add3PointGuest() {
    displayGuestScore(guestScore += 3)
}

function displayHomeScore(score) {
    homeEl.textContent = score
}

function displayGuestScore(score) {
    guestEl.textContent = score
}

function resetScores(){
    homeScore = 0
    guestScore = 0    
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}

