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