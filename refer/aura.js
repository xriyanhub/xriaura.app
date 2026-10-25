document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('aura_theme') || 'dark';
    const isLight = savedTheme === 'light';

    const themeColor = "#ffb703"; 
    const glowShadow = isLight ? "rgba(255, 183, 3, 0.2)" : "rgba(255, 183, 3, 0.3)";
    const bgDark = isLight ? "#f8f9fa" : "#0d0d0d";
    const cardBg = isLight ? "#ffffff" : "#141414";
    const cardBorder = isLight ? "#dee2e6" : "#222";
    const textColor = isLight ? "#12100e" : "#ffffff";
    const subText = isLight ? "#6c757d" : "#777";

    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    if (!document.getElementById('refer-aura-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'refer-aura-styles';
        styleSheet.innerHTML = `
            body {
                background-color: ${bgDark} !important;
                color: ${textColor} !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.style.color = themeColor;

    const mainTitle = document.getElementById('referMainTitle');
    if (mainTitle) mainTitle.style.color = textColor;

    const referHero = document.querySelector('.refer-hero');
    if (referHero) {
        referHero.style.background = isLight ? "linear-gradient(135deg, #fffdf5, #ffffff)" : "linear-gradient(135deg, #2a220c, #141414)";
        referHero.style.border = `1px solid ${themeColor}`;
    }

    const badgeIcon = document.querySelector('.refer-badge-icon');
    if (badgeIcon) {
        badgeIcon.style.background = isLight ? "rgba(255, 183, 3, 0.15)" : "#1c1c1c";
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
    breakdownLbls.forEach(lbl => lbl.style.color = subText);

    const bonusHint = document.querySelector('.bonus-hint');
    if (bonusHint) {
        bonusHint.style.color = themeColor;
        bonusHint.style.background = isLight ? "rgba(255, 183, 3, 0.1)" : "rgba(255, 183, 3, 0.1)";
        bonusHint.style.border = `1px dashed rgba(255, 183, 3, 0.3)`;
    }

    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.style.background = cardBg;
        card.style.border = `1px solid ${cardBorder}`;
    });

    const statVals = document.querySelectorAll('.stat-card .val');
    statVals.forEach(val => val.style.color = themeColor);

    const statLbls = document.querySelectorAll('.stat-card .lbl');
    statLbls.forEach(lbl => lbl.style.color = subText);

    const inviteBox = document.querySelector('.invite-box');
    if (inviteBox) {
        inviteBox.style.background = cardBg;
        inviteBox.style.border = `1px solid ${cardBorder}`;
    }

    const linkField = document.querySelector('.link-field');
    if (linkField) {
        linkField.style.background = isLight ? "#f1f3f5" : "#1c1c1c";
        linkField.style.border = `1px solid ${cardBorder}`;
        linkField.style.color = isLight ? "#495057" : "#aaa";
    }

    const btnCopy = document.querySelector('.btn-copy');
    if (btnCopy) {
        btnCopy.style.background = isLight ? "#e9ecef" : "#1c1c1c";
        btnCopy.style.color = textColor;
        btnCopy.style.border = `1px solid ${cardBorder}`;
    }

    const btnShare = document.querySelector('.btn-share');
    if (btnShare) {
        btnShare.style.background = themeColor;
        btnShare.style.color = "#000";
    }

    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => title.style.color = themeColor);

    const friendsCard = document.querySelector('.friends-card');
    if (friendsCard) {
        friendsCard.style.background = cardBg;
        friendsCard.style.border = `1px solid ${cardBorder}`;
    }

    const friendsIcon = document.querySelector('.friends-card i');
    if (friendsIcon) friendsIcon.style.color = isLight ? "#adb5bd" : "#444";

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
    stepParas.forEach(p => p.style.color = subText);

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
