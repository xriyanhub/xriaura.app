document.addEventListener("DOMContentLoaded", () => {
    // ---------------------------------------------------------------------------
    // HOME FOLDER THEME CONFIGURATION (এখানে কালার পরিবর্তন করলেই Home Hub পেজ আপডেট হবে)
    // ---------------------------------------------------------------------------
    const themeColor = "#ffb703"; // Golden Amber Theme
    const bgDark = "#12100e";
    const cardBg = "#191612";
    const cardBorder = "#26221c";

    // 1. Root & Body Styling Injection
    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    if (!document.getElementById('home-aura-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'home-aura-styles';
        styleSheet.innerHTML = `
            body {
                background-color: ${bgDark} !important;
                color: #ffffff !important;
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
        item.style.color = "#fff";
    });

    const menuIcons = document.querySelectorAll('.menu-icon');
    menuIcons.forEach(icon => {
        icon.style.background = "rgba(255, 183, 3, 0.15)";
        icon.style.color = themeColor;
    });

    const menuArrows = document.querySelectorAll('.menu-arrow');
    menuArrows.forEach(arrow => arrow.style.color = themeColor);

    const menuSubTexts = document.querySelectorAll('.menu-info p');
    menuSubTexts.forEach(p => p.style.color = "#888");

    // 4. Bottom Navigation Bar & Active Tab (Home) Glow
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.background = "#14110d";
        navBar.style.borderTop = `1px solid ${cardBorder}`;
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (!item.classList.contains('active')) {
            item.style.color = "#777";
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
