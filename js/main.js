document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    var errorElement = document.getElementById('error');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailInput = document.getElementById('email');
        var passwordInput = document.getElementById('password');
        var email = emailInput.value;
        var password = passwordInput.value;
        if (email === 'yourname@gmail.com' && password === 'Password.0707') {
            localStorage.setItem('loggedInEmail', email);
            window.location.href = 'dashboard.html';
        }
        else {
            errorElement.textContent = 'Invalid email or password. Please try again.';
        }
    });
});
