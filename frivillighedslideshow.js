let currentSlideIndex = 0;
const slides = document.getElementsByClassName('frivillighedslide'); 

function showSlide(index) {
    // Loop gennem alle slides og skjul dem
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // Vis den aktuelle slide
    slides[index].style.display = 'block';
}

function changeSlides(n) {
    currentSlideIndex += n;

    // Loop slides, hvis vi når slutningen eller starten
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    showSlide(currentSlideIndex);
}

// Vis den første slide ved sideindlæsning
showSlide(currentSlideIndex);