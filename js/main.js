// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';

// let randomNumber = Math.floor(Math.random() * imageArray.length );

// let randomOption = true;

// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );

//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';

//     }, 4000);

//   }
// }
// randomizeImgs();

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector("nav.navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
    if (window.scrollY > 0) {
      header.classList.add("shadow", "bg-bg");
      header.querySelector(".logo").classList.add("text-text");
      header.querySelector(".logo i").classList.add("text-text");
      menuIcon.classList.add("text-text");
      document.querySelectorAll("nav.navbar a").forEach((link) => {
        link.classList.add("text-text");
        link.classList.remove("text-main");
      });
    } else {
      header.classList.remove("shadow", "bg-bg");
      header.querySelector(".logo").classList.remove("text-text");
      header.querySelector(".logo i").classList.remove("text-text");
      menuIcon.classList.remove("text-text");
      document.querySelectorAll("nav.navbar a").forEach((link) => {
        link.classList.remove("text-text");
        link.classList.add("text-main");
      });
    }
  });
});
