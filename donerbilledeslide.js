// Opret et array af objekter for hvert slide
const slidesData = [
    { image: "img/donorslideshow1.jpg", description: "Med blot et lille beløb kan du hjælpe med give nye bolde og udstyr til børnene på krisecenter." },
    { image: "img/donerslideshow2.jpg", description: "Du kan også hjælpe med at give udsatte børn nye bøger til skolen. " },
    { image: "img/donerslideshow3.jpg", description: "Du kan hjælpe udsatte børn med at komme på udflugt." }
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

    // Hvis slideIndex er større end antallet af slides, nulstilles det til første slide
    if (n > slidesData.length) { slideIndex = 1; }    
    if (n < 1) { slideIndex = slidesData.length; }

    // Skjuler alle slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Fjerner 'active' fra alle prikker
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Opdaterer det aktuelle slide baseret på `slideIndex`
    slides[slideIndex - 1].innerHTML = `
        <img src="${slidesData[slideIndex - 1].image}" style="width:100%">
        <div class="text-under">${slidesData[slideIndex - 1].description}</div>
    `;

    // Viser den aktuelle slide og tilføjer 'active' til den tilhørende prik
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}
