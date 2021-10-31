window.onload = () => {
  displayArtist ()
}

const query = new URLSearchParams(document.location.search).get("artistId")
console.log(query)

const displayArtist = () => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${query}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    //const artistBackgroundImg = document.querySelector('.jumbotron')
    //artistBackgroundImg.setAttribute("style", `background-image= url(${data.artist.picture});object-fit: cover; height: 45vh;`) ///Not Displaying Image.
    const h1 = document.querySelector('h1').innerHTML = data.artist.name
    const displayTracks = document.querySelector('.tracklist-row')
    displayTracks.innerHTML = data.tracks.data.map(element => 
    `
    <th id="green-row" scope="row" colspan="4" class="tracks01 track-title-text">
        <svg  class="playing-progres-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 
        1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
        </svg>
        <img src=${element.md5_image} class="img-fluid mx-3" style="height: 40px; height: 40px;" alt="...">
        ${element.artist.name}
        </th>
    <td class="viewed-text pl-5 pt-4" colspan="2">62.000.000</td>
    <td class="viewed-text pt-4">
        <svg class="like-song-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 
        5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 
        1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
        ${element.duration}
        <svg class="dropdown-song-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 
        4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" fill="#000"/>
        </svg>
    </td>
    
    `
    ).join('')
  })
  .catch(err => {
    console.log(err)
  })
}
let visibility = true;
const navVisibility = () => {
  let nav = document.querySelector("nav");
  let main = document.querySelector("main");
  let jumbotron = document.getElementsByClassName("jumbotron")[0];

  visibility ? nav.classList.add("d-none") : nav.classList.remove("d-none");
  visibility ? main.classList.remove("d-none") : main.classList.add("d-none");

  visibility = !visibility;
};

let menuButtonMain = document
  .getElementById("menuButton")
  .addEventListener("click", () => navVisibility());

let menuButtonNav = document
  .getElementById("menuButtonNav")
  .addEventListener("click", () => navVisibility());

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
