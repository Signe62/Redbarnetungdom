// Globale variabler
let donationsBeloeb = document.getElementById('donationsBeloeb');
let resultat = document.getElementById('resultat');

// Array til at matche donation og effekt
let donationsEffekter = [
    { beloeb: 100, effekt: "5 børn får et sundt og nærende måltid" },
    { beloeb: 250, effekt: "10 børn får skolebøger og skolesager" },
    { beloeb: 500, effekt: "medicin til 20 børn" },
    { beloeb: 1000, effekt: "hjælp til at give et barn et trygt hjem" }
];

// Funktion til at beregne donationens effekt
function beregnDonationEffekt() {
    let beloeb = parseFloat(donationsBeloeb.value);  // Henter og omdanner input til tal
    if (isNaN(beloeb) || beloeb <= 0) {
        alert('Indtast et gyldigt beløb');  // Fejlhåndtering
        return;
    }

    let besked = "Dit bidrag gør en forskel!";  // Standardbesked
    let fundetEffekt = false;

    // Brug af loop til at matche beløb med effekt
    for (let i = 0; i < donationsEffekter.length; i++) {
        if (beloeb >= donationsEffekter[i].beloeb) {
            besked = `For ${beloeb} kr. kan du give ${donationsEffekter[i].effekt}`;
            fundetEffekt = true;
        }
    }

    if (!fundetEffekt) {
        besked = "Dit bidrag hjælper børn i nød!";
    }

    // Fejlfinding med console.log
    console.log("Beregningsresultat: ", besked);

    // DOM-manipulation for at vise resultatet
    resultat.innerText = besked;
}

// Event listener til knappen
document.getElementById('beregnKnap').addEventListener('click', beregnDonationEffekt);
