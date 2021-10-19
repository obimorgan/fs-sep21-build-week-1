let visibility = true;
const navVisibility = () => {
  let nav = document.querySelector("nav");

  visibility ? nav.classList.add("d-none") : nav.classList.remove("d-none");

  visibility = !visibility;
};

let menuButtonMain = document
  .getElementById("menuButton")
  .addEventListener("click", () => navVisibility());

let menuButtonNav = document
  .getElementById("menuButtonNav")
  .addEventListener("click", () => navVisibility());
