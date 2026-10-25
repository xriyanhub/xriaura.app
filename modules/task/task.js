import CONFIG from '../../config.js';

export function initTask() {
    const token = localStorage.getItem('xriaura_token');
    if (!token) {
        window.location.hash = '#auth';
        return;
    }

    const taskMessage = document.getElementById('taskMessage');
    const taskButtons = document.querySelectorAll('.task-btn');

    taskButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const reward = parseFloat(btn.getAttribute('data-reward'));
            try {
                const res = await fetch(`${CONFIG.apiEndpoint}/earn/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        amount: reward,
                        type: 'TASK',
                        description: 'Completed Daily Task Mission'
                    })
                });
                const data = await res.json();

                if (res.ok) {
                    taskMessage.style.color = '#10b981';
                    taskMessage.textContent = `Task completed! Earned +${reward} XRI. New Balance: ${data.balance.toFixed(2)} XRI`;
                    btn.disabled = true;
                    btn.textContent = 'Completed';
                    btn.style.opacity = '0.6';

                    const localUser = JSON.parse(localStorage.getItem('xriaura_user'));
                    if (localUser) {
                        localUser.balance = data.balance;
                        localStorage.setItem('xriaura_user', JSON.stringify(localUser));
                    }
                } else {
                    taskMessage.style.color = '#ef4444';
                    taskMessage.textContent = data.message || 'Failed to claim task reward';
                }
            } catch (error) {
                taskMessage.style.color = '#ef4444';
                taskMessage.textContent = 'Server connection error!';
            }
        });
    });
}
