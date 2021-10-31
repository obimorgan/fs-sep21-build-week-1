window.onload = () => {
  displayAlbum()
}
const query = new URLSearchParams(document.location.search).get("albumId")
console.log(query)

const displayAlbum = () => {
  fetch (`https://striveschool-api.herokuapp.com/api/deezer/album/${query}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const albumCoverImage = document.querySelector('.album-img')
    albumCoverImage.innerHTML = 
    `
    <img
    src="${data.cover_big}"
    class="img-fluid"
    alt="Atil Album"
    id="albumImg"
    />

    `
    const albumCoverParent = document.querySelector('.album-header')
    albumCoverParent.innerHTML = 
    `
    <h6 class="album-title">ALBUM</h6>
    <h1 class="album-header">${data.title}</h1>
    <div class="d-flex">
      <img
        src="${data.artist.picture}"
        class="rounded-circle"
        width="30px"
        height="30px"
        alt="small image"
      />
      <a class= "ancher-header text-white" href="../artist-page/index.html?artistId=${data.artist.id}">${data.artist.name}</a>
      <div class="">
        <span class="headerSmallRow">.${data.release_date}</span>
        <span class="headerSmallRow">.${data.tracks.data.length} songs</span>
        <span class="headerSmallRow">.${data.duration}</span>
      </div>
    </div>
    `

    const albumTracks = document.querySelector('.colors')
    albumTracks.innerHTML = data.tracks.data.map(element => 

    `
        <tbody class="colors">
          <tr class="align-middle">
            <th class="TheaderText align-middle shortWidth p-1"scope="row"></th>
            <td class="TheaderText align-middle p-1">${element.title}<br /><a class="link" href="#">${element.artist.name}</a></td>
            <td class="TheaderText align-middle text-right p-1">${element.duration}</td>
        </tbody>
    
    `
    )
  })
}

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
