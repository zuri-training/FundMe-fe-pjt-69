const burger = document.querySelector('.burger');
const asideContent = document.querySelector('.aside-content');
const closeBanner = document.querySelector('.fa-times');

//Toggle navbar and hamburger menu
burger.addEventListener('click', ()=>{
  asideContent.classList.toggle("active");
  burger.classList.toggle('toggle');
})





// Close navbar when link is clicked
const navLink = document.querySelectorAll(".link");

navLink.forEach(link => link.addEventListener("click", ()=>{
  asideContent.classList.remove("active");
  burger.classList.toggle('toggle');
}));