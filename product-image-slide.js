
//slideshow for images
let slideIndex = 1;
showSlide(slideIndex);

//when you click an arrow
function changeSlide(n) {
  showSlide(slideIndex += n); //add n to the current slide index to show the new slide
}


function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) slideIndex = 1; //last slide and press next, end up at first
  if (n < 1) slideIndex = slides.length; //first slide and press previous, end up at last

  //hides all slides so only one will be shown next
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //shows correct slide
  slides[slideIndex - 1].style.display = "block";
}