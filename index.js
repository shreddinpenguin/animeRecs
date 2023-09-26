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
let currentAnime;

document.addEventListener("DOMContentLoaded", ()=>{
    Promise.all([
        fetch(topRanked).then(res => res.json()),
        fetch(taylorPicks).then(res => res.json()),
        fetch(dannyPicks).then(res => res.json())
    ])
        .then(data => {
            renderTopPicks(data[0])
            renderDannyPicks(data[2])
            renderTaylorPicks(data[1])
            displayInfo(data[0][0])
        })

    // fetch(topRanked)
    // .then(res => res.json())
    // .then(data => {
    //     data.forEach(anime => {
    //         renderTopPicks(anime)
    //     })
    //     displayInfo(data)
    // })
    // fetch(taylorPicks)
    // .then(res => res.json())
    // .then(data => {
    //     data.forEach(anime => {
    //         renderTaylorPicks(anime)
    //     })
    //     displayInfo(data)
    // })
    // fetch(dannyPicks)
    // .then(res => res.json())
    // .then(data => {
    //     data.forEach(anime => {
    //         renderDannyPicks(anime)
    //     })
    //     displayInfo(data)
    // })
})

const renderTopPicks = (animes)=>{
    animes.forEach(anime => {
        let img = document.createElement("img")
        img.className = "imageTile"
        img.src = anime.image
        img.addEventListener("click", ()=>{
            displayInfo(anime)
        })
        document.querySelector("#top-picks").append(img)
    })
}
const renderTaylorPicks = (animes)=>{
    animes.forEach(anime => {
        let img = document.createElement("img")
        img.className = "imageTile"
        img.src = anime.image
        img.addEventListener("click", ()=>{
            displayInfo(anime)
        })
        document.querySelector("#taylor-picks").append(img)
    })
}
const renderDannyPicks = (animes)=>{
    animes.forEach(anime => {
        let img = document.createElement("img")
        img.className = "imageTile"
        img.src = anime.image
        img.addEventListener("click", ()=>{
            displayInfo(anime)
        })
        document.querySelector("#danny-picks").append(img)
    })
}

// document.querySelector(".display-images").addEventListener("mouseover", () => {
//     nav.display-images.img =
// })

function displayInfo (show) {
    currentAnime = show
    animeImage.src = show.image
    animeTitle.textContent = show.Title
    animeYear.textContent = `Year Released: ${show.aired}`
    animeDescription.textContent = show.description
    watched.textContent = watchedUnwatched(show)
    animeEpisodes.textContent = `Episode Count: ${show.episode_count}`
}

watched.addEventListener("click", () => {
    currentAnime.watched = !currentAnime.watched
    watched.textContent = currentAnime.watched ? "Watched" : "Unwatched"
})

function watchedUnwatched (event) {
    if (event.watched === true){
        return "Watched"
    }
    else if (event.watched === false){
        return "Unwatched"
    }
}