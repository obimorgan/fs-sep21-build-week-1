window.onload = () => {
  fetchEminem()
}

const fetchEminem = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "f0aa699c5fmsh28554b7069ba793p1dc7d9jsnf8d185b3f84f"
    }
  })
  .then((res) => res.json())
  .then(data => {
    console.log(data)
  })
  .then(data => {
    const albumList = document.querySelector('.album-list')
    const albumListBtn = document.createElement('button')
    albumListBtn.classList.add('dropdown-item.bg-dark.text-light')
    albumListBtn.innerText = data.data[0].album.title
  })
  .catch(err => {
    console.error(err);
  });
  // fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem')
  // .then((res) => res.json())
  // .then(data => console.log(data))
  // .catch((e) => console.log(e))
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
