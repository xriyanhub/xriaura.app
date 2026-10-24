document.addEventListener("DOMContentLoaded", () => {
    const themeColor = "#ffb703";
    const bgDark = "#0d0d0d";
    const cardBg = "#141414";
    const cardBorder = "#222";
    const glowShadow = "rgba(255, 183, 3, 0.3)";

    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    if (!document.getElementById('earn-aura-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'earn-aura-styles';
        styleSheet.innerHTML = `
            body {
                background-color: ${bgDark} !important;
                color: #ffffff !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Subtitles & Main Titles
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.style.color = themeColor;

    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) mainTitle.style.color = "#fff";

    const desc = document.querySelector('.desc');
    if (desc) desc.style.color = "#888";

    // Spin Wheel Elements
    const wheel = document.getElementById('wheel');
    if (wheel) {
        wheel.style.background = `conic-gradient(
            ${themeColor} 0deg 60deg,
            #1c1c1c 60deg 120deg,
            ${themeColor} 120deg 180deg,
            #222 180deg 240deg,
            ${themeColor} 240deg 300deg,
            #141414 300deg 360deg
        )`;
        wheel.style.boxShadow = `0 0 20px ${glowShadow}`;
    }

    const wheelCenter = document.querySelector('.wheel-center');
    if (wheelCenter) {
        wheelCenter.style.background = "#111";
        wheelCenter.style.border = `4px solid ${themeColor}`;
        wheelCenter.style.color = themeColor;
    }

    const pointer = document.querySelector('.pointer');
    if (pointer) {
        pointer.style.borderBottomColor = themeColor;
    }

    const spinBtn = document.querySelector('.spin-btn');
    if (spinBtn) {
        spinBtn.style.background = themeColor;
        spinBtn.style.color = "#000";
        spinBtn.style.boxShadow = `0 4px 15px ${glowShadow}`;
    }

    const spinInfo = document.getElementById('spinInfo');
    if (spinInfo) spinInfo.style.color = "#888";

    // Bottom Navigation Bar
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
