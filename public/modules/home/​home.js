import CONFIG from '../../config.js';

export async function initHome() {
    const token = localStorage.getItem('xriaura_token');
    if (!token) {
        window.location.hash = '#auth';
        return;
    }
    
    const usernameDisplay = document.getElementById('usernameDisplay');
    const userBalance = document.getElementById('userBalance');
    
    // Load local user info first for instant display
    const localUser = JSON.parse(localStorage.getItem('xriaura_user'));
    if (localUser) {
        usernameDisplay.textContent = localUser.username;
        userBalance.textContent = localUser.balance.toFixed(2);
    }
    
    // Fetch fresh profile data from API
    try {
        const res = await fetch(`${CONFIG.apiEndpoint}/user/profile`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await res.json();
        
        if (res.ok) {
            usernameDisplay.textContent = data.username;
            userBalance.textContent = data.balance.toFixed(2);
            localStorage.setItem('xriaura_user', JSON.stringify(data));
        } else if (res.status === 401) {
            localStorage.clear();
            window.location.hash = '#auth';
        }
    } catch (error) {
        console.error('Failed to fetch profile:', error);
    }
}
