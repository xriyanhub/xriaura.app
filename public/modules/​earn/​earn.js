import CONFIG from '../../config.js';

export function initEarn() {
    const token = localStorage.getItem('xriaura_token');
    if (!token) {
        window.location.hash = '#auth';
        return;
    }

    const claimDailyBtn = document.getElementById('claimDailyBtn');
    const boostBtn = document.getElementById('boostBtn');
    const earnMessage = document.getElementById('earnMessage');

    claimDailyBtn.addEventListener('click', async () => {
        try {
            const res = await fetch(`${CONFIG.apiEndpoint}/earn/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    amount: 5.00,
                    type: 'EARN',
                    description: 'Daily Check-In Reward'
                })
            });
            const data = await res.json();

            if (res.ok) {
                earnMessage.style.color = '#10b981';
                earnMessage.textContent = `Success! New Balance: ${data.balance.toFixed(2)} XRI`;
                
                // Update local storage user balance
                const localUser = JSON.parse(localStorage.getItem('xriaura_user'));
                if (localUser) {
                    localUser.balance = data.balance;
                    localStorage.setItem('xriaura_user', JSON.stringify(localUser));
                }
            } else {
                earnMessage.style.color = '#ef4444';
                earnMessage.textContent = data.message || 'Failed to claim reward';
            }
        } catch (error) {
            earnMessage.style.color = '#ef4444';
            earnMessage.textContent = 'Server connection error!';
        }
    });

    boostBtn.addEventListener('click', async () => {
        try {
            const res = await fetch(`${CONFIG.apiEndpoint}/earn/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    amount: 12.50,
                    type: 'STAKE',
                    description: 'Thunder Boost Yield'
                })
            });
            const data = await res.json();

            if (res.ok) {
                earnMessage.style.color = '#10b981';
                earnMessage.textContent = `Boost Activated! Balance: ${data.balance.toFixed(2)} XRI`;
                
                const localUser = JSON.parse(localStorage.getItem('xriaura_user'));
                if (localUser) {
                    localUser.balance = data.balance;
                    localStorage.setItem('xriaura_user', JSON.stringify(localUser));
                }
            } else {
                earnMessage.style.color = '#ef4444';
                earnMessage.textContent = data.message || 'Failed to activate boost';
            }
        } catch (error) {
            earnMessage.style.color = '#ef4444';
            earnMessage.textContent = 'Server connection error!';
        }
    });
}
