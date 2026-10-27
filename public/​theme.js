import { initAuth } from './modules/auth/auth.js';
import { initHome } from './modules/home/home.js';
import { initEarn } from './modules/earn/earn.js';

async function router() {
  let hash = window.location.hash.substring(1) || 'home';
  const token = localStorage.getItem('xriaura_token');
  
  // If not logged in and trying to access protected pages, redirect to auth
  if (!token && hash !== 'auth' && hash !== 'register') {
    hash = 'auth';
    window.location.hash = '#auth';
  } else if (token && (hash === 'auth' || hash === '')) {
    hash = 'home';
    window.location.hash = '#home';
  }
  
  const moduleView = document.getElementById('moduleView');
  
  try {
    let htmlPath = '';
    let initFunction = null;
    
    switch (hash) {
      case 'auth':
        htmlPath = './modules/auth/auth.html';
        initFunction = initAuth;
        break;
      case 'home':
        htmlPath = './modules/home/home.html';
        initFunction = initHome;
        break;
      case 'earn':
        htmlPath = './modules/earn/earn.html';
        initFunction = initEarn;
        break;
      case 'task':
        htmlPath = './modules/task/task.html';
        break;
      case 'refer':
        htmlPath = './modules/refer/refer.html';
        break;
      case 'profile':
        htmlPath = './modules/profile/profile.html';
        break;
      default:
        htmlPath = './modules/home/home.html';
        initFunction = initHome;
    }
    
    const response = await fetch(htmlPath);
    if (!response.ok) throw new Error('Module not found');
    const html = await response.text();
    
    moduleView.innerHTML = html;
    
    if (initFunction) {
      initFunction();
    }
    
    // Update active class on bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.getAttribute('data-module') === hash) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
  } catch (error) {
    moduleView.innerHTML = `<div style="padding: 20px; text-align: center; color: #ef4444;">Failed to load module: ${hash}</div>`;
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
