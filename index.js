// Local host variables
const topRanked = "http://localhost:3000/topRanked"
const dannyPicks = "http://localhost:3000/dannyPicks"
const taylorPicks = "http://localhost:3000/taylorPicks"
const sources = ["http://localhost:3000/topRanked", "http://localhost:3000/dannyPicks", "http://localhost:3000/taylorPicks"]
// global variables
const animeImage = document.querySelector("#detail-image")
const animeTitle = document.querySelector("#title")
const animeYear = document.querySelector("#year-aired")
const animeDescription = document.querySelector("#description")
const watched = document.querySelector("#watched")
const animeEpisodes = document.querySelector("#episode-count")
const titleHeader = document.querySelector("#title_header")
let currentAnime;
// Loads the three api's from the db.json
document.addEventListener("DOMContentLoaded", () => {
    Promise.all([
        fetch(topRanked).then(res => res.json()),
        fetch(dannyPicks).then(res => res.json()),
        fetch(taylorPicks).then(res => res.json())
    ])
    // displays the images for the top picks, taylor picks, and danny picks. Also displays the first info for top picks
        .then(data => {
            renderTopPicks(data[0])
            renderDannyPicks(data[1])
            renderTaylorPicks(data[2])
            console.log(data)
            displayInfo(data[0][0])
        })
})
// variable arrow function that cycles through the top picks info and pulls the image contents and displays them when called
const renderTopPicks = (animes) => {
    animes.forEach(anime => {
        let img = document.createElement("img")
        img.className = "imageTile"
        img.src = anime.image
        img.addEventListener("click", () => {
            displayInfo(anime)
        })
        document.querySelector("#top-picks").append(img)
    })
}
// variable arrow function that cycles through the taylor picks info and pulls the image contents and displays them when called
const renderTaylorPicks = (animes) => {
    animes.forEach(anime => {
        let img = document.createElement("img")
        img.className = "imageTile"
        img.src = anime.image
        img.addEventListener("click", () => {
            displayInfo(anime)
        })
        document.querySelector("#taylor-picks").append(img)
})
}
// variable arrow function that cycles through the danny picks info and pulls the image contents and displays them when called
const renderDannyPicks = (animes) => {
    animes.forEach(anime => {
        let img = document.createElement("img")
        img.className = "imageTile"
        img.src = anime.image
        img.addEventListener("click", () => {
            displayInfo(anime)
        })
        document.querySelector("#danny-picks").append(img)
})
}
// Assigns the db.json information to the correct id's and divs in the HTML when called
function displayInfo(show) {
    console.log(show)
    currentAnime = show
    animeImage.src = show.image
    animeTitle.textContent = show.Title
    animeYear.textContent = `Year Released: ${show.aired}`
    animeDescription.textContent = show.description
    watched.textContent = watchedUnwatched(show)
    animeEpisodes.textContent = `Episode Count: ${show.episode_count}`
}
// Simple eventlistener that assigns watched or unwatched when the button is clicked
watched.addEventListener("click", () => {
    currentAnime.watched = !currentAnime.watched
    watched.textContent = currentAnime.watched ? "Watched" : "Unwatched"
})
// Simple function that assigns the value of watched or unwatched depending on what the value is in the watched button value
function watchedUnwatched(event) {
    if (event.watched === true) {
        return "Watched"
    }
    else if (event.watched === false) {
        return "Unwatched"
    }
}
// Both of these eventlisteners create a mouseover and mouseout event that triggers a text animation for the title header 
titleHeader.addEventListener("mouseover",(e)=>{
    titleHeader.className="text-focus-in"
    console.log(titleHeader.className)
})
titleHeader.addEventListener("mouseout",(e)=>{
    titleHeader.className=""
    console.log(titleHeader.className)
})