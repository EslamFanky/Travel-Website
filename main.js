const searchBtn = document.getElementById("search-btn");
const searchBar = document.querySelector(".search-bar-container");
const loginBtn = document.getElementById("login-btn");
const form = document.getElementById("form");
const formCon = document.querySelector(".login-form-container");
const formClose = document.getElementById("form-close");
const menuBar = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");
const videos = document.querySelectorAll(".video");
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
searchBtn.addEventListener("click", (e) => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  navbar.classList.remove("active-menu");
};

function showForm() {
  formCon.style.top = "0px";
  form.style.left = "0px";
  // form.style.transition = "left 1.5s ease-in-out";
}

function hiddenForm() {
  formCon.style.top = null;
  form.style.left = null;
  // form.style.transition = "left 0.4s ease-in-out";
}

function showMenu() {
  navbar.classList.toggle("active-menu");
}

loginBtn.addEventListener("click", showForm);
formClose.addEventListener("click", hiddenForm);
menuBar.addEventListener("click", showMenu);
// Start home controls
const country = document.querySelector(".big-text");
let countries = ["Egypt", "Dubai", "Luxurious", " Desert" , 'Seashore'];
let index = 0;
let counter = 0;

function showNextVideo(e) {
  videos[counter].classList.remove("live");
  counter = (counter + 1) % videos.length;
  videos[counter].classList.add("live");
  index = (index + 1) % countries.length;
  country.innerHTML = countries[index];
}

function showPrevVideo(e) {
  videos[counter].classList.remove("live");
  counter = (counter - 1 + videos.length) % videos.length;
  videos[counter].classList.add("live");
  index = (index - 1 + countries.length) % countries.length;
  country.innerHTML = countries[index];
}

nextEl.addEventListener("click", showNextVideo);
prevEl.addEventListener("click", showPrevVideo);

// End home controls
