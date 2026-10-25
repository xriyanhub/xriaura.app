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
    
    if (!document.getElementById('home-aura-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'home-aura-styles';
        styleSheet.innerHTML = `
            body {
                background-color: ${bgDark} !important;
                color: ${textColor} !important;
            }
            .menu-item:active {
                border-color: ${themeColor} !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // 2. Header Elements
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) backBtn.style.color = themeColor;

    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) mainTitle.style.color = themeColor;

    // 3. Menu Items & Cards
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.background = cardBg;
        item.style.border = `1px solid ${cardBorder}`;
        item.style.color = textColor;
    });

    const menuIcons = document.querySelectorAll('.menu-icon');
    menuIcons.forEach(icon => {
        icon.style.background = isLight ? "rgba(255, 183, 3, 0.15)" : "rgba(255, 183, 3, 0.15)";
        icon.style.color = themeColor;
    });

    const menuArrows = document.querySelectorAll('.menu-arrow');
    menuArrows.forEach(arrow => arrow.style.color = themeColor);

    const menuSubTexts = document.querySelectorAll('.menu-info p');
    menuSubTexts.forEach(p => p.style.color = subText);

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
