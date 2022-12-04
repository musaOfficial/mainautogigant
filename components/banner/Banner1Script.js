let fbIcon = document.getElementsByClassName("fb-link");
let instaIcon = document.getElementsByClassName("insta-link");
let tiktokIcon = document.getElementsByClassName("tiktok-link");
let ytIcon = document.getElementsByClassName("yt-link");

let fb = document.getElementsByClassName("fb")[0];
let insta = document.getElementsByClassName("insta")[0];
let tiktok = document.getElementsByClassName("tiktok")[0];
let yt = document.getElementsByClassName("yt")[0];

for (var i = 0; i < fbIcon.length; i++) {
  fbIcon[i].addEventListener("mouseover", () => {
    fb.style.opacity = 1;
  });
  instaIcon[i].addEventListener("mouseover", () => {
    insta.style.opacity = 1;
  });
  tiktokIcon[i].addEventListener("mouseover", () => {
    tiktok.style.opacity = 1;
  });
  ytIcon[i].addEventListener("mouseover", () => {
    yt.style.opacity = 1;
  });

  fbIcon[i].addEventListener("mouseout", () => {
    fb.style.opacity = 0;
  });
  instaIcon[i].addEventListener("mouseout", () => {
    insta.style.opacity = 0;
  });
  tiktokIcon[i].addEventListener("mouseout", () => {
    tiktok.style.opacity = 0;
  });
  ytIcon[i].addEventListener("mouseout", () => {
    yt.style.opacity = 0;
  });
}

let logoLoop = document.getElementsByClassName("logo")[0];
let mascotLoop = document.getElementsByClassName("mascot")[0];
let iconsLoop = document.getElementsByClassName("icons")[0];
let buttonLoop = document.getElementsByClassName("button")[0];
let headingLoop = document.getElementsByClassName("heading")[0];
let heading2Loop = document.getElementsByClassName("heading-2")[0];

setInterval(function () {
  logoLoop.classList.remove("start");
  mascotLoop.classList.remove("start");
  iconsLoop.classList.remove("start");
  buttonLoop.classList.remove("start");
  headingLoop.classList.remove("start");
  heading2Loop.classList.remove("start");
  setInterval(function () {
    logoLoop.classList.add("start");
    mascotLoop.classList.add("start");
    iconsLoop.classList.add("start");
    buttonLoop.classList.add("start");
    headingLoop.classList.add("start");
    heading2Loop.classList.add("start");
  }, 0);
}, 7000);
