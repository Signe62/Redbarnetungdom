// script.js

// 1. Variabler til at gemme søgefeltet og søgeord
let searchInput = document.getElementById("soegefelt"); 

// 2. Array der indeholder mulige søgeord og tilhørende URL'er
let searchKeywords = [
    { keyword: "frivillig", url: "frivillighed.html" },
    { keyword: "donation", url: "doner.html" }, 
    { keyword: "doner", url: "doner.html" },
    { keyword: "tilmeld", url: "blivfrivillig.html" },
    { keyword: "quiz", url: "frivillighed.html" },
    { keyword: "cv", url: "index.html" } ];

// 3. Søgefunktion
function search() {
    // 4. Variabel til at gemme brugerens input, og typecast det til lowercase for at gøre sammenligning lettere
    let userInput = searchInput.value.toLowerCase();

    // Debugging: Udskriv brugerens input
    console.log("Bruger input:", userInput);

    // 5. If-else kontrolstruktur til at tjekke om input er tomt
    if (userInput === "") {
        alert("Søgefeltet kan ikke være tomt");
        return; // Stop funktionen hvis input er tomt
    }

    // 6. Variabel til at spore om vi har fundet et match
    let found = false;

    // 7. For-løkke for at søge i arrayet af søgeord (loop gennem objekterne i searchKeywords arrayet)
    for (let i = 0; i < searchKeywords.length; i++) {
        // 8. Kontrolstruktur (if-else) for at tjekke om brugerens input matcher et af søgeordene
        if (userInput === searchKeywords[i].keyword) {
            // Debugging: Udskriv den fundne URL
            console.log("Matcher fundet! Omdirigerer til:", searchKeywords[i].url);

            // Omdirigér til den matchende side
            window.location.href = searchKeywords[i].url;
            found = true; // Opdater found variabel
            break; // Stop loopet, da vi har fundet en match
        }
    }

    // 9. Hvis der ikke findes et match
    if (!found) {
        alert("Ingen resultater fundet for '" + userInput + "'");
    }
}

// Debugging: Udskriv søgeordene for at sikre, at arrayet er korrekt
console.log("Mulige søgeord:", searchKeywords);