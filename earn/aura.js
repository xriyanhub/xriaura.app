document.addEventListener("DOMContentLoaded", () => {
    const themeColor = "#ffb703"; // Golden Amber Theme
    const bgDark = "#0d0d0d";
    const cardBg = "#141414";
    const cardBorder = "#222";
    const glowShadow = "rgba(255, 183, 3, 0.3)";

    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    if (!document.getElementById('earn-hub-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'earn-hub-styles';
        styleSheet.innerHTML = `
            body {
                background-color: ${bgDark} !important;
                color: #ffffff !important;
            }
            .earn-card:active {
                border-color: ${themeColor} !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Header Title
    const earnTitle = document.getElementById('earnTitle');
    if (earnTitle) earnTitle.style.color = themeColor;

    // Earn Cards Styling
    const earnCards = document.querySelectorAll('.earn-card');
    earnCards.forEach(card => {
        card.style.background = cardBg;
        card.style.border = `1px solid ${cardBorder}`;
    });

    const cardIcons = document.querySelectorAll('.card-icon');
    cardIcons.forEach(icon => {
        icon.style.background = "#1c1c1c";
        icon.style.border = "1px solid #2a2a2a";
        icon.style.color = themeColor;
        icon.style.boxShadow = `0 0 10px ${glowShadow}`;
    });

    const cardTitles = document.querySelectorAll('.card-info h3');
    cardTitles.forEach(h3 => h3.style.color = "#fff");

    const cardParas = document.querySelectorAll('.card-info p');
    cardParas.forEach(p => p.style.color = "#888");

    const cardArrows = document.querySelectorAll('.card-arrow');
    cardArrows.forEach(arrow => arrow.style.color = themeColor);

    // Bottom Navigation Bar & Active Tab (Earn) Glow
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.background = "#111";
        navBar.style.borderTop = "1px solid #222";
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (!item.classList.contains('active')) {
            item.style.color = "#666";
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
