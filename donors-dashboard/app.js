//Get elements from the DOM
const burger = document.querySelector('.burger');
const link = document.querySelector('.link-items');
const asideContent = document.querySelector('.aside-content');
const closeBanner = document.querySelector('.fa-times');


//Toggle navbar
burger.addEventListener('click', ()=>{
  if(asideContent.style.display === 'block'){
    asideContent.style.display = 'none';
  }else {
    asideContent.style.display = 'block';
  }
  
//Animate hamburger
burger.classList.toggle('toggle');
});


//Close navbar on clicking links
link.addEventListener('click', ()=>{
  asideContent.style.display = 'none';
  burger.classList.toggle('toggle');
})

//Close dashboard banner  
closeBanner.addEventListener('click', (e)=>{
  e.target.parentElement.remove();
});