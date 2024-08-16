document.getElementById('signupForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const bio = document.getElementById('bio').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, bio, email, password })
    });
  
    if (response.ok) {
      alert('User registered successfully');
      window.location.href = 'login.html';
    } else {
      alert('Failed to sign up');
    }
  });
  