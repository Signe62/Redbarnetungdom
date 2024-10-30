// Globale variabler
let donationsBeloeb = document.getElementById('doner-donationsBeloeb');
let resultat = document.getElementById('doner-beregn-resultat');

// Array til at matche donation og effekt
let donationsEffekter = [
    { beloeb: 100, effekt: "en klasse et sundt og nærende måltid" },
    { beloeb: 250, effekt: "10 børn skolebøger og skolesager" },
    { beloeb: 500, effekt: "medicinsk hjælp til 20 børn" },
    { beloeb: 1000, effekt: "3 børn et trygt hjem" }
];

// Funktion til at beregne donationens effekt
function beregnDonationEffekt() {
    let beloeb = parseFloat(donationsBeloeb.value);  // Henter og omdanner input til tal
    if (isNaN(beloeb) || beloeb <= 0) {
        alert('Indtast et gyldigt beløb');  // Fejlhåndtering
        return;
    }

    let besked = "Dit bidrag gør en forskel!";  // Standardbesked

    // Brug af loop til at matche beløb med effekt
    for (let i = donationsEffekter.length - 1; i >= 0; i--) {
        if (beloeb >= donationsEffekter[i].beloeb) {
            besked = `For ${beloeb} kr. kan du give ${donationsEffekter[i].effekt}`;
            break;
        }
    }

    // Fejlfinding med console.log
    console.log("Beregningsresultat: ", besked);

    // DOM-manipulation for at vise resultatet
    resultat.innerText = besked;
}

// Event listener til knappen
document.getElementById('doner-beregn-knap').addEventListener('click', beregnDonationEffekt);
