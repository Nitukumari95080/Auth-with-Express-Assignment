async function loadUserData() {
    const response = await fetch('http://localhost:3000/', {
      method: 'GET',
      credentials: 'include'
    });
  
    if (response.ok) {
      const user = await response.json();
      document.getElementById('username').innerText = user.username;
      document.getElementById('bio').innerText = user.bio;
      document.getElementById('email').innerText = user.email;
    } else {
      alert('Failed to load user data');
      window.location.href = 'login.html';
    }
  }
  
  window.onload = loadUserData;
  