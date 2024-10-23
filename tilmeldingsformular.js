// Find formularen vha. dens ID og lyt til "submit"-hændelsen
document.getElementById('tilmeldForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stopper formularen fra at sende oplysningerne automatisk

    // Ryd tidligere fejlmeddelelser (tømmer felterne for fejl)
    document.getElementById('tilmeld-navnError').textContent = '';
    document.getElementById('tilmeld-emailError').textContent = '';
    document.getElementById('tilmeld-phoneError').textContent = '';
    document.getElementById('tilmeld-cityError').textContent = '';
    document.getElementById('tilmeld-zipcodeError').textContent = '';
    document.getElementById('tilmeld-birthdateError').textContent = '';
    document.getElementById('tilmeld-interestError').textContent = ''; 
    
    // Hent værdierne fra inputfelterne
    const name = document.getElementById('tilmeld-navn').value.trim(); // Henter og fjerner ekstra mellemrum fra navnefeltet
    const email = document.getElementById('tilmeld-email').value.trim(); // Henter og fjerner ekstra mellemrum fra e-mailfeltet
    const phone = document.getElementById('tilmeld-phone').value.trim(); // Henter og fjerner ekstra mellemrum fra telefonfeltet
    const city = document.getElementById('tilmeld-city').value.trim(); // Henter og fjerner ekstra mellemrum fra by-feltet
    const zipcode = document.getElementById('tilmeld-zipcode').value.trim(); // Henter og fjerner ekstra mellemrum fra postnummer-feltet
    const birthdate = document.getElementById('tilmeld-birthdate').value; // Henter fødselsdag
    const interest = document.getElementById('tilmeld-interest').value; // Henter den valgte mulighed fra dropdown-menuen

    let hasError = false; // Variabel til at spore, om der er fejl i formularen

    // **Validering af navnefeltet**: Hvis navnefeltet er tomt, vis en fejlmeddelelse
    if (name === '') {
        document.getElementById('tilmeld-navnError').textContent = 'Navn er påkrævet';
        hasError = true; // Angiver at der er en fejl
    }

    // **Validering af e-mailfeltet**: Hvis e-mailen er tom, eller ikke er korrekt formatet, vis en fejlmeddelelse
    if (email === '') {
        document.getElementById('tilmeld-emailError').textContent = 'E-mail er påkrævet';
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('tilmeld-emailError').textContent = 'Indtast en gyldig e-mail';
        hasError = true;
    }

    // **Validering af telefonnummerfeltet**: Hvis telefonnummeret er tomt eller ikke passer med det rigtige format, vis en fejlmeddelelse
    if (phone === '') {
        document.getElementById('tilmeld-phoneError').textContent = 'Telefonnummer er påkrævet';
        hasError = true;
    } else if (!validatePhone(phone)) {
        document.getElementById('tilmeld-phoneError').textContent = 'Indtast et gyldigt telefonnummer';
        hasError = true;
    }

    // **Validering af by-feltet**: Hvis by-feltet er tomt, vis en fejlmeddelelse
    if (city === '') {
        document.getElementById('tilmeld-cityError').textContent = 'By er påkrævet';
        hasError = true;
    }

    // **Validering af postnummer-feltet**: Hvis postnummeret er tomt eller ikke har det korrekte format, vis en fejlmeddelelse
    if (zipcode === '') {
        document.getElementById('tilmeld-zipcodeError').textContent = 'Postnummer er påkrævet';
        hasError = true;
    } else if (!/^\d{4}$/.test(zipcode)) { // Tjekker at postnummeret er 4 cifre
        document.getElementById('tilmeld-zipcodeError').textContent = 'Indtast et gyldigt postnummer';
        hasError = true;
    }

    // **Validering af fødselsdag-feltet**: Hvis fødselsdagen er tom, vis en fejlmeddelelse
    if (birthdate === '') {
        document.getElementById('tilmeld-birthdateError').textContent = 'Fødselsdag er påkrævet';
        hasError = true;
    }

    // **Validering af interessefeltet**: Hvis der ikke er valgt nogen interesse, vis en fejlmeddelelse
    if (interest === '') {
        document.getElementById('tilmeld-interestError').textContent = 'Vælg en interesse';
        hasError = true;
    }

    // Hvis der ikke er nogen fejl, vis en bekræftelse til brugeren
    if (!hasError) {
        alert(`Tak for din tilmelding, ${name}! Vi kontakter dig snart.`);
        // Her kan formulardata sendes til en server eller API
    }
});

// **Validering af e-mailen**: Simpel funktion til at tjekke om e-mailformatet er korrekt
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regel for hvordan en gyldig e-mail ser ud
    return re.test(email); // Returnerer true, hvis e-mailen passer med reglen
}

// **Validering af telefonnummeret**: Simpel funktion til at tjekke om telefonnummeret har 8 cifre
function validatePhone(phone) {
    const re = /^\d{8}$/; // Regel for danske telefonnumre, som skal være præcis 8 cifre
    return re.test(phone); // Returnerer true, hvis telefonnummeret er gyldigt
}