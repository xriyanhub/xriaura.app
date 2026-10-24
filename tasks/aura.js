document.addEventListener("DOMContentLoaded", () => {
    // ---------------------------------------------------------------------------
    // TASKS HUB THEME CONFIGURATION (এখানে কালার পরিবর্তন করলেই Tasks পেজ আপডেট হবে)
    // ---------------------------------------------------------------------------
    const themeColor = "#ffb703"; // Golden Amber Theme
    const bgDark = "#0d0d0d";
    const cardBg = "#141414";
    const cardBorder = "#222";

    // 1. Root & Body Styling Injection
    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    if (!document.getElementById('tasks-aura-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'tasks-aura-styles';
        styleSheet.innerHTML = `
            body {
                background-color: ${bgDark} !important;
                color: #ffffff !important;
            }
            .cat-card:active {
                border-color: ${themeColor} !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // 2. Header Elements
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.style.color = themeColor;

    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) mainTitle.style.color = "#fff";

    const desc = document.querySelector('.desc');
    if (desc) desc.style.color = "#888";

    // 3. Category Cards
    const catCards = document.querySelectorAll('.cat-card');
    catCards.forEach(card => {
        card.style.background = cardBg;
        card.style.border = `1px solid ${cardBorder}`;
        if (card.classList.contains('active')) {
            card.style.background = "linear-gradient(135deg, #2a220c, #141414)";
            card.style.borderColor = themeColor;
        }
    });

    const catIcons = document.querySelectorAll('.cat-icon');
    catIcons.forEach(icon => icon.style.color = themeColor);

    const catNames = document.querySelectorAll('.cat-name');
    catNames.forEach(name => name.style.color = "#bbb");

    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => badge.style.background = "#ff4757");

    // 4. Sub Navigation Buttons
    const subBtns = document.querySelectorAll('.sub-btn');
    subBtns.forEach(btn => {
        btn.style.background = cardBg;
        btn.style.border = `1px solid ${cardBorder}`;
        btn.style.color = "#888";
        if (btn.classList.contains('active')) {
            btn.style.background = themeColor;
            btn.style.color = "#000";
            btn.style.borderColor = themeColor;
        }
    });

    const addTaskBtn = document.getElementById('addTaskBtn');
    if (addTaskBtn) addTaskBtn.style.color = themeColor;

    // 5. Bottom Navigation Bar & Active Tab (Tasks) Glow
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.background = "#14110d";
        navBar.style.borderTop = `1px solid #26221c`;
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
