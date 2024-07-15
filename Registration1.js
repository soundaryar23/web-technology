document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            displayFormData();
            form.reset();
        }
    });

    form.addEventListener('reset', function (event) {
        if (!confirm('Do you really want to reset the form?')) {
            event.preventDefault();
        }
    });

    function validateForm() {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const district = document.getElementById('district').value.trim();
        const state = document.getElementById('state').value;
        const postalCode = document.getElementById('postalCode').value.trim();
        const country = document.getElementById('country').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (!firstName || !lastName || !email || !contact || !dob || !gender || !district || !state || !postalCode || !country || !password || !confirmPassword) {
            alert('Please fill out all fields.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (!validateContactNumber(contact)) {
            alert('Please enter a valid contact number.');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return emailPattern.test(email);
    }

    function validateContactNumber(contact) {
        const contactPattern = /^[0-9]{10}$/;
        return contactPattern.test(contact);
    }

    function displayFormData() {
        const formData = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            email: document.getElementById('email').value.trim(),
            contact: document.getElementById('contact').value.trim(),
            dob: document.getElementById('dob').value.trim(),
            gender: document.querySelector('input[name="gender"]:checked').value,
            district: document.getElementById('district').value.trim(),
            state: document.getElementById('state').value,
            postalCode: document.getElementById('postalCode').value.trim(),
            country: document.getElementById('country').value.trim()
        };
        
        console.log('Form Data:', formData);
    }
});
