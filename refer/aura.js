document.addEventListener("DOMContentLoaded", () => {
    // ---------------------------------------------------------------------------
    // REFER PAGE THEME CONFIGURATION (এখানে কালার পরিবর্তন করলেই Refer পেজ আপডেট হবে)
    // ---------------------------------------------------------------------------
    const themeColor = "#ffb703"; // Golden Amber Theme
    const glowShadow = "rgba(255, 183, 3, 0.3)";
    const bgDark = "#0d0d0d";
    const cardBg = "#141414";
    const cardBorder = "#222";

    // 1. Root & Body Styling Injection
    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    if (!document.getElementById('refer-aura-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'refer-aura-styles';
        styleSheet.innerHTML = `
            body {
                background-color: ${bgDark} !important;
                color: #ffffff !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // 2. Header Titles & Subtitles
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.style.color = themeColor;

    const mainTitle = document.getElementById('referMainTitle');
    if (mainTitle) mainTitle.style.color = "#fff";

    // 3. Refer Hero Card Styling
    const referHero = document.querySelector('.refer-hero');
    if (referHero) {
        referHero.style.background = "linear-gradient(135deg, #2a220c, #141414)";
        referHero.style.border = `1px solid ${themeColor}`;
    }

    const badgeIcon = document.querySelector('.refer-badge-icon');
    if (badgeIcon) {
        badgeIcon.style.background = "#1c1c1c";
        badgeIcon.style.border = `2px solid ${themeColor}`;
        badgeIcon.style.color = themeColor;
        badgeIcon.style.boxShadow = `0 0 15px ${glowShadow}`;
    }

    const referBonusTitle = document.getElementById('referBonusTitle');
    if (referBonusTitle) referBonusTitle.style.color = themeColor;

    const breakdownBoxes = document.querySelectorAll('.breakdown-box');
    breakdownBoxes.forEach(box => {
        box.style.background = cardBg;
        box.style.border = `1px solid ${cardBorder}`;
    });

    const breakdownVals = document.querySelectorAll('.breakdown-box .val');
    breakdownVals.forEach(val => val.style.color = themeColor);

    const breakdownLbls = document.querySelectorAll('.breakdown-box .lbl');
    breakdownLbls.forEach(lbl => lbl.style.color = "#777");

    const bonusHint = document.querySelector('.bonus-hint');
    if (bonusHint) {
        bonusHint.style.color = themeColor;
        bonusHint.style.background = "rgba(255, 183, 3, 0.1)";
        bonusHint.style.border = `1px dashed rgba(255, 183, 3, 0.3)`;
    }

    // 4. Stats Row & Cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.style.background = cardBg;
        card.style.border = `1px solid ${cardBorder}`;
    });

    const statVals = document.querySelectorAll('.stat-card .val');
    statVals.forEach(val => val.style.color = themeColor);

    const statLbls = document.querySelectorAll('.stat-card .lbl');
    statLbls.forEach(lbl => lbl.style.color = "#777");

    // 5. Invite Link Box
    const inviteBox = document.querySelector('.invite-box');
    if (inviteBox) {
        inviteBox.style.background = cardBg;
        inviteBox.style.border = `1px solid ${cardBorder}`;
    }

    const linkField = document.querySelector('.link-field');
    if (linkField) {
        linkField.style.background = "#1c1c1c";
        linkField.style.border = "1px solid #2a2a2a";
        linkField.style.color = "#aaa";
    }

    const btnCopy = document.querySelector('.btn-copy');
    if (btnCopy) {
        btnCopy.style.background = "#1c1c1c";
        btnCopy.style.color = "#fff";
        btnCopy.style.border = "1px solid #333";
    }

    const btnShare = document.querySelector('.btn-share');
    if (btnShare) {
        btnShare.style.background = themeColor;
        btnShare.style.color = "#000";
    }

    // 6. Section Titles, Friends Card & Steps Card
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => title.style.color = themeColor);

    const friendsCard = document.querySelector('.friends-card');
    if (friendsCard) {
        friendsCard.style.background = cardBg;
        friendsCard.style.border = `1px solid ${cardBorder}`;
    }

    const friendsIcon = document.querySelector('.friends-card i');
    if (friendsIcon) friendsIcon.style.color = "#444";

    const stepsCard = document.querySelector('.steps-card');
    if (stepsCard) {
        stepsCard.style.background = cardBg;
        stepsCard.style.border = `1px solid ${cardBorder}`;
    }

    const stepNums = document.querySelectorAll('.step-num');
    stepNums.forEach(num => {
        num.style.background = themeColor;
        num.style.color = "#000";
    });

    const stepParas = document.querySelectorAll('.step-info p, .friends-card p');
    stepParas.forEach(p => p.style.color = "#777");

    // 7. Bottom Navigation Bar & Active Tab (Refer) Glow
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
