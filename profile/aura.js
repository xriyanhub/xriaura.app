document.addEventListener("DOMContentLoaded", () => {
    // ---------------------------------------------------------------------------
    // PROFILE THEME CONFIGURATION (এখানে কালার চেঞ্জ করলেই পুরো Profile পেজ আপডেট হবে)
    // ---------------------------------------------------------------------------
    const themeColor = "#ffb703"; // Golden Amber Theme
    const glowShadow = "rgba(255, 183, 3, 0.4)";
    const bgDark = "#12100e";
    const cardBg = "#191612";
    const cardBorder = "#26221c";
    const subBoxBg = "#1f1b15";

    // 1. Root & Body Setup
    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    if (!document.getElementById('profile-aura-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'profile-aura-styles';
        styleSheet.innerHTML = `
            body {
                background-color: ${bgDark} !important;
                color: #ffffff !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // 2. Profile Header & Avatar
    const profileHeader = document.querySelector('.profile-header');
    if (profileHeader) {
        profileHeader.style.background = cardBg;
        profileHeader.style.border = `1px solid ${cardBorder}`;
    }

    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.style.background = "#1f1a14";
        avatar.style.border = `2px solid ${themeColor}`;
        avatar.style.color = themeColor;
        avatar.style.boxShadow = `0 0 12px ${glowShadow}`;
    }

    const levelBadge = document.querySelector('.level-badge');
    if (levelBadge) {
        levelBadge.style.background = themeColor;
        levelBadge.style.color = "#000";
        levelBadge.style.border = `2px solid ${cardBg}`;
    }

    const profileHandle = document.querySelector('.profile-handle');
    if (profileHandle) profileHandle.style.color = "#888";

    // 3. Progress Box
    const progressBox = document.querySelector('.progress-box');
    if (progressBox) {
        progressBox.style.background = subBoxBg;
        progressBox.style.border = `1px solid ${cardBorder}`;
    }

    const progressFill = document.querySelector('.progress-bar-fill');
    if (progressFill) progressFill.style.background = themeColor;

    const progressBarBg = document.querySelector('.progress-bar-bg');
    if (progressBarBg) progressBarBg.style.background = "#2a241c";

    const progressSub = document.querySelector('.progress-sub');
    if (progressSub) progressSub.style.color = "#777";

    // 4. Balance Cards & Counters
    const balanceCards = document.querySelectorAll('.balance-card');
    balanceCards.forEach(card => {
        card.style.background = cardBg;
        card.style.border = `1px solid ${cardBorder}`;
    });

    const values = document.querySelectorAll('.balance-card .val, .counter-box .val');
    values.forEach(val => val.style.color = themeColor);

    const counterBoxes = document.querySelectorAll('.counter-box');
    counterBoxes.forEach(box => {
        box.style.background = cardBg;
        box.style.border = `1px solid ${cardBorder}`;
    });

    const counterLbls = document.querySelectorAll('.counter-box .lbl');
    counterLbls.forEach(lbl => lbl.style.color = "#888");

    // 5. Section Titles & Menus
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => title.style.color = themeColor);

    const menuLists = document.querySelectorAll('.menu-list');
    menuLists.forEach(list => {
        list.style.background = cardBg;
        list.style.border = `1px solid ${cardBorder}`;
    });

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.borderBottom = `1px solid #221e18`;
    });

    const menuRights = document.querySelectorAll('.menu-right');
    menuRights.forEach(right => right.style.color = "#888");

    const menuParagraphs = document.querySelectorAll('.menu-info p');
    menuParagraphs.forEach(p => p.style.color = "#888");

    // 6. Bottom Navigation Bar & Active Tab (Profile) Glow
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
