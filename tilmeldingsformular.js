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
    