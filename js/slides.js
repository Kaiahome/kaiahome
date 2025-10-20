//////// Kilder /////////
// https://www.w3schools.com/howto/howto_js_slideshow.asp
// ChatGPT

var slideIndex = 0; // Til at fortælle hvilket billedet som bliver vist
var carouselTimeout;

function startCarousel() {
  var x = document.getElementsByClassName("mySlides"); // Finder alle elementer med klassen "mySlides"

  // Kør kun hvis skærmen er mindre end 800 px (mobilsite)
  if (window.innerWidth < 800) {
    // Går igennem alle billederne og skjuler dem
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    slideIndex++; // lægger 1 til slideindex, så den skiter til næste slide
    if (slideIndex > x.length) slideIndex = 1; // Hvis slidesindex er større end antallet af billeder, så den gå tilbage til slideindex 1
    x[slideIndex - 1].style.display = "block"; // viser billedet

    // Venter 2 sekunder før den køre funktionen startCarousel igen
    carouselTimeout = setTimeout(startCarousel, 2000);
  } else {
    // Hvis skærmen er bredere end 800 px skal den ikke vises
    clearTimeout(carouselTimeout);
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
}

// Kalder funktionen startCarousel() når siden er loadet
startCarousel();

// Når skærmen størrelse ændre sig, så skal denne funktion køre
window.addEventListener("resize", function () {
  // Stopper den igangværende funktion
  clearTimeout(carouselTimeout);
  slideIndex = 0; // resetter index
  startCarousel(); // Slideshow skal starte igen hvis skærmen er mindre end 800 px
});
