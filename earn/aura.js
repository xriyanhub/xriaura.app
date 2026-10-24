document.addEventListener("DOMContentLoaded", () => {
    // ---------------------------------------------------------------------------
    // EARN PAGE THEME CONFIGURATION (এখানে কালਰ পরিবর্তন করলেই Earn পেজ আপডেট হবে)
    // ---------------------------------------------------------------------------
    const themeColor = "#ffb703"; // Golden Amber Theme (বা আপনার পছন্দমতো কালার দিতে পারেন)
    const glowShadow = "rgba(255, 183, 3, 0.4)";
    const bgDark = "#12100e";
    const cardBg = "#191612";
    const cardBorder = "#26221c";

    // 1. Root & Body Styling Injection
    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    if (!document.getElementById('earn-aura-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'earn-aura-styles';
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

    // 2. Header Title Color
    const mainTitle = document.getElementById('earnTitle');
    if (mainTitle) {
        mainTitle.style.color = themeColor;
    }

    // 3. Earn Cards Styling & 3D Glow Setup
    const earnCards = document.querySelectorAll('.earn-card');
    earnCards.forEach(card => {
        card.style.background = cardBg;
        card.style.border = `1px solid ${cardBorder}`;
        card.style.color = "#fff";
    });

    const cardIcons = document.querySelectorAll('.card-icon');
    cardIcons.forEach(icon => {
        icon.style.background = "rgba(255, 183, 3, 0.15)";
        icon.style.color = themeColor;
        icon.style.border = `1px solid rgba(255, 183, 3, 0.3)`;
    });

    const cardArrows = document.querySelectorAll('.card-arrow');
    cardArrows.forEach(arrow => {
        arrow.style.color = themeColor;
    });

    const cardParagraphs = document.querySelectorAll('.earn-card p');
    cardParagraphs.forEach(p => {
        p.style.color = "#888";
    });

    // 4. Bottom Navigation Bar & Active Tab (Earn) Glow
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
