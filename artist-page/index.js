window.onload = () => {
  displayArtist ()
  displayPopularRelease()
}

const artistQuery = new URLSearchParams(document.location.search).get("artistId")
console.log(artistQuery)

const displayArtist = () => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistQuery}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const artistBackgroundImg = document.querySelector('.jumbotron')
    artistBackgroundImg.setAttribute("style", `background-image= url(${data.picture_big});object-fit: cover; height: 45vh;`) ///Not Displaying Image.
    const h1 = document.querySelector('h1').innerHTML = data.name
    const tracks = document.querySelector('.tracks')
  })
  .catch(err => {
    console.log(err)
  })
}

const displayPopularRelease = () => {
  fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistQuery}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const popularAlbumsParent = document.querySelector('#parent-content')
    popularAlbumsParent.innerHTML = data.data.map(element => 
    `
    <a class="card card-popular-release flex-column align-items-center my-1" 
     style="text-decoration: none;" 
     href="../album-page/album.html?albumId=${element.album.id}">
       <img class="album-img pt-3" src=${element.album.cover_medium} class="card-img-top rounded" alt="...">
       <div class="card-body  d-flex align-items-start justify justify-content-between" style="width: 212px;">
           <div class="card-text">
               <h6 class="text-white" > <strong> ${element.title}</strong></h6>
               <p class="card-album-text">2006 <span> &middot; </span> ${element.album.type}</p>
           </div>
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle-fill playButton" viewBox="0 0 16 16">
             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
             </svg>
       </div>
     </a>
    `
    ).join('')
    const tracks = document.querySelector('.tracks')
    tracks.innerHTML = data.data.map(element =>
    `
    <tr class="tracklist-row"> 
    <th id="green-row" scope="row" colspan="4" class="tracks01 track-title-text">
        ${Object.keys(element)}
        <img src="${element.album.cover_small}" class="img-fluid mx-3" style="height: 40px; height: 40px;" alt="...">
        ${element.title}</th>
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
    </tr>
    `
    ).join('')
  })
}

let visibility = true;
const navVisibility = () => {
  let nav = document.querySelector("nav");
  let main = document.querySelector("main");
  // let jumbotron = document.getElementsByClassName("jumbotron")[0];

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
