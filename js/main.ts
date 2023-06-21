document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm') as HTMLFormElement;
  const errorElement = document.getElementById('error') as HTMLElement;

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === 'yourname@gmail.com' && password === 'Password.0707') {
      localStorage.setItem('loggedInEmail', email);
      window.location.href = 'dashboard.html';
    } else {
      errorElement.textContent = 'Invalid email or password. Please try again.';
    }
  });
});
