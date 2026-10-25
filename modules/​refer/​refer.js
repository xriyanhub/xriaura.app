export function initRefer() {
    const token = localStorage.getItem('xriaura_token');
    if (!token) {
        window.location.hash = '#auth';
        return;
    }

    const localUser = JSON.parse(localStorage.getItem('xriaura_user'));
    const referralLinkInput = document.getElementById('referralLinkInput');
    const copyRefBtn = document.getElementById('copyRefBtn');
    const referMessage = document.getElementById('referMessage');

    if (localUser && localUser.referralCode) {
        const refLink = `${window.location.origin}/#auth?ref=${localUser.referralCode}`;
        referralLinkInput.value = refLink;
    } else {
        referralLinkInput.value = `${window.location.origin}/#auth?ref=XRI123456`;
    }

    copyRefBtn.addEventListener('click', () => {
        referralLinkInput.select();
        navigator.clipboard.writeText(referralLinkInput.value);
        referMessage.style.color = '#10b981';
        referMessage.textContent = 'Referral link copied to clipboard!';
        setTimeout(() => referMessage.textContent = '', 2000);
    });
}
