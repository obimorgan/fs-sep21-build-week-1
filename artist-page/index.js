
let albums = []
let error = false


const searchDeezer = (query) => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "f0aa699c5fmsh28554b7069ba793p1dc7d9jsnf8d185b3f84f"
    }
  })
  .then((response) => response.json())
  .then(data => {
    console.log('resolved')

    if (data.data) {
      const obj = {title: query, albums: data.data}
      albums.push(obj)
      console.log(albums)
    }else {
      error = true
    }
  })
  .catch((err) => {
    console.log('rejected')
    console.error(err)
    error = true
  });
}
function singleAlbum (album) {
  return
  `<a class="card card-popular-release flex-column align-items-center" 
  style="text-decoration: none;" 
  href="">
    <img class="album-img pt-3" src="${album.cover}" class="card-img-top rounded" alt="...">
    <div class="card-body  d-flex align-items-start justify justify-content-between" style="width: 212px;">
        <div class="card-text">
            <h6 class="text-white" > <strong>${album.title}</strong></h6>
            <p class="card-album-text">2006 <span> &middot; </span> Album</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle-fill playButton" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
          </svg>
    </div>
  </a>`
}
function albumsRow (title, albumsHTML) {
  return 
  `<a id="render"href=""><h4 class="text-white ml-4 my-4" >${title}</h4>
    <div class="d-flex justify-content-around flex-wrap px-2">
      ${albumsHTML}
    </div>
  </a> 
`
}
window.onload = () => {
  searchDeezer('Eminem')
  // searchDeezer('Metallica')
  // searchDeezer('Behemoth')
  const renderLink = document.querySelector('#render')

  renderLink.addEventListener('click', function() {

    alert('Render Is Clicked')

    let parentContent = document.querySelector('#parent-content')
    alert("Parent content is targeted ")
    let parentContentHtml = ""
    parentContent.childNodes.forEach((node, index) => {
      if (index !== 1) {
        node.remove()
      }
    })

    alert('and deleted previous albums')

    // albums.forEach((albumResult) => {
    //   let rowContent = ""
    //   const title = albumResult.title
    //   const data = albumResult.albums

    //   data.forEach((result) => {
    //     const title = result.title
    //     const cover = result.album.cover_medium
    //     const album = {cover, title}
    //     rowContent += singleAlbum(album)
    //   })
    //   parentContentHtml += albumsRow(title, "")
    //   rowContent = ""
    // })
    // parentContent.innerHtml = parentContentHtml
    // console.log(albums)
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
