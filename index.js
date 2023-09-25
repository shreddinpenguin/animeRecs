const sources = ["http://localhost:3000/topRanked", "http://localhost:3000/dannyPicks", "http://localhost:3000/taylorPicks"]
function fetchContent(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(anime => {
            renderTopPicks(anime)
        })
    })
}
fetchContent("http://localhost:3000/topRanked")
// document.addEventListener("DOMContentLoaded", ()=>{
//     sources.forEach((source) => fetchContent(source))

// })

const renderTopPicks = (anime)=>{
    let img = document.createElement("img")
    img.src = anime.image
    // img.addEventListener("click", ()=>{

    // })
    document.querySelector("#top-picks").append(img)
}