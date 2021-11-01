window.onload = function () {   
  displayRecentlyPlayed()     
  getDateTime();
} 

const displayRecentlyPlayed = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=hip-hop")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const parent = document.querySelector('.recentlyPlayed-Cards')
      parent.innerHTML = data.data.map(element =>
      `
      <a href="../album-page/album.html?albumId=${element.album.id}"  class="col-sm-6 col-md-3 col-lg-2 mb-3 px-0">
        <div class="card cardwrap mx-2 h-100 bg-dark border-dark">
          <img
            src="${element.artist.picture_small}  "
            class="p-3"
            alt="..."
            id="notRounded"
          />
          <div class="card-body d-flex justify-content-between">
            
            <p class="card-text text-white"><strong>${element.artist.name}</strong> <br>
            
              <small class="text-muted">Music</small>
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle-fill playButton" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
            </svg>
          </div>
        </div>
      </a>

      `
      ).join('')
    })
    .catch((err) => console.log(err))
}

const searchResult = () => {
  const searchInput =  document.querySelector('.form-control')
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const parent = document.querySelector('.search-result')
      parent.innerHTML = data.data.map(element =>
      `
      <div class="music-card my-1"  id="cardHover" onmouseover="mouseOver('linear-gradient(180deg, rgb(28, 4, 83) 0%, rgb(0, 0, 0) 35%)')" onmouseout="mouseOut() ">
        <div class="media d-flex">
          <img
            src="${element.artist.picture_small}"
            class="mr-3 img-fluid img1"
            alt="..."
          />
          <div class="media-body bodyHover d-flex align-self-center">
            <a href="../artist-page/index.html?artistId=${element.artist.id}" style="text-decoration: none; color: white;">
              <h6 class="mt-0">${element.artist.name}</h6>
            </a>
            <h6 class="card-title ml-3"><i class="bi bi-play-circle-fill playHover"></i></h6>
          </div>
        </div>
      </div>

      `
      ).join('')
    })
    .catch((err) => console.log(err))
} 
const searchBtn = document.querySelector('.bi-search')
searchBtn.addEventListener('click', searchResult)



let visibility = true;
const navVisibility = () => {
  let nav = document.querySelector("nav");
  let main = document.querySelector("main");

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
