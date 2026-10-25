document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('aura_theme') || 'dark';
    const isLight = savedTheme === 'light';

    const themeColor = "#ffb703"; // Golden Amber Theme
    const bgDark = isLight ? "#f8f9fa" : "#12100e";
    const cardBg = isLight ? "#ffffff" : "#191612";
    const cardBorder = isLight ? "#dee2e6" : "#26221c";
    const textColor = isLight ? "#12100e" : "#ffffff";
    const subText = isLight ? "#6c757d" : "#888";

    // 1. Root & Body Styling Injection
    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    if (!document.getElementById('profile-aura-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'profile-aura-styles';
        styleSheet.innerHTML = `
            body {
                background-color: ${bgDark} !important;
                color: ${textColor} !important;
            }
            .convert-btn:active, .action-btn:active {
                opacity: 0.8;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // 2. Header Elements
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.style.background = cardBg;
        backBtn.style.border = `1px solid ${cardBorder}`;
        backBtn.style.color = themeColor;
    }

    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) mainTitle.style.color = textColor;

    // 3. Cards & Inputs (For Convert / Wallet / Profile pages)
    const cards = document.querySelectorAll('.convert-card, .menu-item, .profile-card, .wallet-card');
    cards.forEach(card => {
        card.style.background = cardBg;
        card.style.border = `1px solid ${cardBorder}`;
    });

    const inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach(group => {
        group.style.background = isLight ? "#f1f3f5" : "#12100e";
        group.style.border = `1px solid ${cardBorder}`;
    });

    const inputLabels = document.querySelectorAll('.input-label');
    inputLabels.forEach(label => label.style.color = subText);

    const inputValues = document.querySelectorAll('.input-value');
    inputValues.forEach(val => val.style.color = textColor);

    const currencyBadges = document.querySelectorAll('.currency-badge');
    currencyBadges.forEach(badge => {
        badge.style.background = isLight ? "rgba(255, 183, 3, 0.2)" : "#221d14";
        badge.style.color = themeColor;
        badge.style.border = `1px solid ${cardBorder}`;
    });

    const swapCircle = document.querySelector('.swap-circle');
    if (swapCircle) {
        swapCircle.style.background = themeColor;
        swapCircle.style.color = "#000";
        swapCircle.style.boxShadow = `0 0 10px rgba(255, 183, 3, 0.4)`;
    }

    const convertBtn = document.querySelector('.convert-btn');
    if (convertBtn) {
        convertBtn.style.background = themeColor;
        convertBtn.style.color = "#000";
    }

    const infoNotes = document.querySelectorAll('.info-note');
    infoNotes.forEach(note => note.style.color = subText);

    // 4. Bottom Navigation Bar & Active Tab Glow
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.background = isLight ? "#ffffff" : "#14110d";
        navBar.style.borderTop = `1px solid ${cardBorder}`;
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (!item.classList.contains('active')) {
            item.style.color = isLight ? "#adb5bd" : "#777";
        }
    });

    const activeItem = document.querySelector('.nav-item.active');
    if (activeItem) {
        const icon = activeItem.querySelector('i');
        const span = activeItem.querySelector('span');
        if (icon) {
            icon.style.color = themeColor;
            icon.style.filter = `drop-shadow(0 0 10px ${themeColor})`;
        }
        if (span) span.style.color = themeColor;
    }
});
