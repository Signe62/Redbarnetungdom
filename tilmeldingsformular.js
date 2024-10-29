// Find formularen vha. dens ID og lyt til "submit"-hændelsen
document.getElementById('tilmeldForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById('tilmeld-navn').value.trim();
    const birthdate = document.getElementById('tilmeld-birthdate').value.trim();
    const city = document.getElementById('tilmeld-city').value.trim();
    const zipcode = document.getElementById('tilmeld-zipcode').value.trim();
    const email = document.getElementById('tilmeld-email').value.trim();
    const phone = document.getElementById('tilmeld-phone').value.trim();
    const interest = document.getElementById('tilmeld-interest').value;

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.tilmeld-error').forEach(error => error.textContent = '');

    // Validate each field
    if (!name) {
        document.getElementById('tilmeld-navnError').textContent = "Navn er påkrævet.";
        isValid = false;
    }
    if (!birthdate) {
        document.getElementById('tilmeld-birthdateError').textContent = "Fødselsdag er påkrævet.";
        isValid = false;
    }
    if (!city) {
        document.getElementById('tilmeld-cityError').textContent = "By er påkrævet.";
        isValid = false;
    }
    if (!zipcode) {
        document.getElementById('tilmeld-zipcodeError').textContent = "Postnummer er påkrævet.";
        isValid = false;
    }
    if (!email || !validateEmail(email)) {
        document.getElementById('tilmeld-emailError').textContent = "Ugyldig e-mail.";
        isValid = false;
    }
    if (!phone || !validatePhone(phone)) {
        document.getElementById('tilmeld-phoneError').textContent = "Telefonnummer skal være 8 cifre.";
        isValid = false;
    }
    if (!interest) {
        document.getElementById('tilmeld-interestError').textContent = "Vælg venligst en indsats.";
        isValid = false;
    }

    // Show success alert if all fields are valid
    if (isValid) {
        alert(`Tak for din tilmelding, ${name}! Vi kontakter dig snart.`);
        document.getElementById('tilmeldForm').reset();
    }
});

// **Validering af e-mailen**: Simpel funktion til at tjekke om e-mailformatet er korrekt
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// **Validering af telefonnummeret**: Simpel funktion til at tjekke om telefonnummeret har 8 cifre
function validatePhone(phone) {
    const re = /^\d{8}$/;
    return re.test(phone);
}
