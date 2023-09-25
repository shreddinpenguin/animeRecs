sources = ["http://localhost:3000/topRanked", "http://localhost:3000/dannyPicks", "http://localhost:3000/taylorPicks"]
function fetchContent(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

document.addEventListener("DOMContentLoaded", ()=>{
    sources.forEach((source) => fetchContent(source))
})