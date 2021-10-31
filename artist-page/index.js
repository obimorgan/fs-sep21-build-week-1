



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
