export function initProfile() {
    const token = localStorage.getItem('xriaura_token');
    if (!token) {
        window.location.hash = '#auth';
        return;
    }

    const localUser = JSON.parse(localStorage.getItem('xriaura_user'));
    const profileUsername = document.getElementById('profileUsername');
    const profileEmail = document.getElementById('profileEmail');
    const logoutBtn = document.getElementById('logoutBtn');

    if (localUser) {
        profileUsername.textContent = localUser.username || 'Aura User';
        profileEmail.textContent = localUser.email || 'user@xriaura.com';
    }

    logoutBtn.addEventListener('click', () => {
        localStorage.clear();
        window.location.hash = '#auth';
    });
}
