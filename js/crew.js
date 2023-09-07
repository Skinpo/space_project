function setUpCrew() {
    const crewNav = document.querySelector(".navigate-crew");
    crewNav.appendChild(newDiv2);
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("img");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// let shiftIndex = 0;
// shiftSlides();

// function shiftSlides() {
//   let i;
//   let dots = document.getElementsByClassName("dots");   
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   shiftIndex++;
//   dots[shiftIndex-1].className += " active2";
//   setTimeout(shiftSlides, 5000); // Change image every 2 seconds
// }

// set index and transition delay
let index = 0;
let transitionDelay = 5000;

// get div containing the slides
let slideContainer = document.querySelector(".photos");
// get the slides
let slides = slideContainer.querySelectorAll(".imgs");

// set transition delay for slides
for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay/1000}s linear`;
}

// show the first slide
showSlide(index);

// show a specific slide
function showSlide(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? "block" : "none";
  });
  // next index
  index++;
  // go back to 0 if at the end of slides
  if (index >= slides.length) {
    index = 0;
  }
}

// transition to next slide every x seconds
setInterval (() => showSlide(index), transitionDelay);
