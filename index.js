const topRanked = "http://localhost:3000/topRanked"
const dannyPicks = "http://localhost:3000/dannyPicks"
const taylorPicks = "http://localhost:3000/taylorPicks"
const sources = ["http://localhost:3000/topRanked", "http://localhost:3000/dannyPicks", "http://localhost:3000/taylorPicks"]
document.addEventListener("DOMContentLoaded", ()=>{
    fetch(topRanked)
    .then(res => res.json())
    .then(data => {
        data.forEach(anime => {
            renderTopPicks(anime)
        })
    })
    fetch(taylorPicks)
    .then(res => res.json())
    .then(data => {
        data.forEach(anime => {
            renderTaylorPicks(anime)
        })
    })
    fetch(dannyPicks)
    .then(res => res.json())
    .then(data => {
        data.forEach(anime => {
            renderDannyPicks(anime)
        })
    })
})

const renderTopPicks = (anime)=>{
    let img = document.createElement("img")
    img.src = anime.image
    // img.addEventListener("click", ()=>{

    // })
    document.querySelector("#top-picks").append(img)
}
const renderTaylorPicks = (anime)=>{
    let img = document.createElement("img")
    img.src = anime.image
    // img.addEventListener("click", ()=>{

    // })
    document.querySelector("#taylor-picks").append(img)
}

const renderDannyPicks = (anime)=>{
    let img = document.createElement("img")
    img.src = anime.image
    // img.addEventListener("click", ()=>{

    // })
    document.querySelector("#danny-picks").append(img)
}

// document.querySelector(".display-images").addEventListener("mouseover", () => {
//     nav.display-images.img =
// })