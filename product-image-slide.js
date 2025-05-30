
const slides = document.getElementsByClassName("slide");
let slideIndex = 1;

//checking for query in url
const urlParams = new URLSearchParams(window.location.search);
const startId = urlParams.get("start");

if (startId) {
  for (let i = 0; i < slides.length; i++) {
    //find the index of the slide with the matching id
    if (slides[i].id === startId) {
      slideIndex = i + 1;
    }
  }
}

//slideshow for images
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

