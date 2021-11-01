window.onload = () => {
  displayArtist ()
  displayPopular()
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
    
  })
  .catch(err => {
    console.log(err)
  })
}

// const query = new URLSearchParams(document.location.search).get("albumId")
// console.log(query)

const displayPopular = () => {
  fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistQuery}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const popularAlbumsParent = document.querySelector('#parent-content')
    popularAlbumsParent.innerHTML = data.data.map(element => 
      `
      <a class="card card-popular-release flex-column align-items-center" 
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
