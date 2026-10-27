import CONFIG from '../../config.js';

export function initAuth() {
  const showLoginBtn = document.getElementById('showLogin');
  const showRegisterBtn = document.getElementById('showRegister');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const authMessage = document.getElementById('authMessage');
  
  // Tab Switching Logic
  showLoginBtn.addEventListener('click', () => {
    showLoginBtn.classList.add('active');
    showRegisterBtn.classList.remove('active');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    authMessage.textContent = '';
  });
  
  showRegisterBtn.addEventListener('click', () => {
    showRegisterBtn.classList.add('active');
    showLoginBtn.classList.remove('active');
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
    authMessage.textContent = '';
  });
  
  // Handle Login Submit
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
      const res = await fetch(`${CONFIG.apiEndpoint}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem('xriaura_token', data.token);
        localStorage.setItem('xriaura_user', JSON.stringify(data.user));
        authMessage.style.color = '#10b981';
        authMessage.textContent = 'Login successful! Redirecting...';
        setTimeout(() => window.location.hash = '#home', 1000);
      } else {
        authMessage.style.color = '#ef4444';
        authMessage.textContent = data.message || 'Login failed';
      }
    } catch (error) {
      authMessage.style.color = '#ef4444';
      authMessage.textContent = 'Server connection error!';
    }
  });
  
  // Handle Register Submit
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const referralCode = document.getElementById('regReferral').value;
    
    try {
      const res = await fetch(`${CONFIG.apiEndpoint}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, referralCode })
      });
      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem('xriaura_token', data.token);
        localStorage.setItem('xriaura_user', JSON.stringify(data.user));
        authMessage.style.color = '#10b981';
        authMessage.textContent = 'Account created successfully! Redirecting...';
        setTimeout(() => window.location.hash = '#home', 1000);
      } else {
        authMessage.style.color = '#ef4444';
        authMessage.textContent = data.message || 'Registration failed';
      }
    } catch (error) {
      authMessage.style.color = '#ef4444';
      authMessage.textContent = 'Server connection error!';
    }
  });
}
