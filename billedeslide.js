// Opret et array af objekter for hvert slide
const slidesData = [
    { image: "images/b1.png", description: "Event: Keramik Event hvor overskuddet går til Red Barnet Ungdom" },
    { image: "images/b2.png", description: "Event: Løb med os og støt Red Barnet Ungdom!" },
    { image: "images/b3.png", description: "Event: Kom til loppemarked og støt Red Barnet Ungdom!" }
];

let slideIndex = 1;
showSlides(slideIndex);

// Funktion til at skifte slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Funktion til at gå til en specifik slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Funktion der viser slides og styrer indikatorerne
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slidesData.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slidesData.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Opdater slide-indhold dynamisk fra objekterne
    slides[0].innerHTML = `
        <img src="${slidesData[slideIndex-1].image}" style="width:100%">
        <div class="text-under">${slidesData[slideIndex-1].description}</div>
    `;

    slides[0].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
