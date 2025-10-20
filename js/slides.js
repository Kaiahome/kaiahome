var slideIndex = 0;
var carouselTimeout;

function startCarousel() {
  var x = document.getElementsByClassName("mySlides");

  // Kør kun hvis mobil
  if (window.innerWidth < 800) {
    // Skjul alle slides
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    // Vis næste slide
    slideIndex++;
    if (slideIndex > x.length) slideIndex = 1;
    x[slideIndex - 1].style.display = "block";

    // Kør igen om 2 sekunder
    carouselTimeout = setTimeout(startCarousel, 2000);
  } else {
    // Stop slideshow og vis ingen slides på desktop
    clearTimeout(carouselTimeout);
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
}

// Start når siden loader
startCarousel();

// Tjek når vinduet ændres
window.addEventListener("resize", function () {
  // Stop evt. eksisterende timeout
  clearTimeout(carouselTimeout);
  slideIndex = 0; // reset index
  startCarousel(); // start igen hvis mobil
});
