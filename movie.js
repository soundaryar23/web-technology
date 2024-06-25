document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username && email && password) {
        document.getElementById('alert').style.display = 'block';

        // Clear the form
        document.getElementById('registrationForm').reset();
    }
});
