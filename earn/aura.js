document.addEventListener("DOMContentLoaded", () => {
    const themeColor = "#ffb703";
    const bgDark = "#0d0d0d";
    const cardBg = "#141414";
    const cardBorder = "#222";

    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    if (!document.getElementById('earn-arcade-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'earn-arcade-styles';
        styleSheet.innerHTML = `
            body {
                background-color: ${bgDark} !important;
                color: #ffffff !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Subtitle & Titles
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.style.color = themeColor;

    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) mainTitle.style.color = "#fff";

    const desc = document.querySelector('.desc');
    if (desc) desc.style.color = "#888";

    // Stats Cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.style.background = cardBg;
        card.style.border = `1px solid ${cardBorder}`;
    });
    const statVals = document.querySelectorAll('.stat-card .val');
    statVals.forEach(val => val.style.color = themeColor);
    const statLbls = document.querySelectorAll('.stat-card .lbl');
    statLbls.forEach(lbl => lbl.style.color = "#777");

    // Contest Banner
    const contestBanner = document.querySelector('.contest-banner');
    if (contestBanner) {
        contestBanner.style.background = cardBg;
        contestBanner.style.border = `1px solid ${cardBorder}`;
    }
    const contestIcon = document.querySelector('.contest-left i');
    if (contestIcon) contestIcon.style.color = themeColor;
    const contestInfoP = document.querySelector('.contest-info p');
    if (contestInfoP) contestInfoP.style.color = "#777";
    const viewBtn = document.querySelector('.view-btn');
    if (viewBtn) {
        viewBtn.style.background = themeColor;
        viewBtn.style.color = "#000";
    }

    // Featured Game
    const featuredGame = document.querySelector('.featured-game');
    if (featuredGame) {
        featuredGame.style.background = "linear-gradient(135deg, #2a220c, #141414)";
        featuredGame.style.border = `1px solid ${themeColor}`;
    }
    const gameSub = document.querySelector('.game-sub');
    if (gameSub) gameSub.style.color = "#aaa";
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.style.background = themeColor;
        playBtn.style.color = "#000";
    }

    // Bonus Card
    const bonusCard = document.querySelector('.bonus-card');
    if (bonusCard) {
        bonusCard.style.background = cardBg;
        bonusCard.style.border = `1px solid ${cardBorder}`;
    }
    const bonusIcon = document.querySelector('.bonus-icon');
    if (bonusIcon) {
        bonusIcon.style.background = "#1c1c1c";
        bonusIcon.style.border = "1px solid #2a2a2a";
        bonusIcon.style.color = themeColor;
    }
    const bonusInfoP = document.querySelector('.bonus-info p');
    if (bonusInfoP) bonusInfoP.style.color = "#777";

    // Categories Chips
    const catChips = document.querySelectorAll('.cat-chip');
    catChips.forEach(chip => {
        chip.style.background = cardBg;
        chip.style.border = `1px solid ${cardBorder}`;
        chip.style.color = "#888";
        if (chip.classList.contains('active')) {
            chip.style.background = themeColor;
            chip.style.color = "#000";
            chip.style.borderColor = themeColor;
        }
    });

    // Mini Games Grid
    const miniThumbs = document.querySelectorAll('.mini-thumb');
    miniThumbs.forEach(thumb => {
        thumb.style.background = "#1c1c1c";
        thumb.style.color = themeColor;
    });
    const gameCardsMini = document.querySelectorAll('.game-card-mini');
    gameCardsMini.forEach(card => {
        card.style.background = cardBg;
        card.style.border = `1px solid ${cardBorder}`;
    });
    const miniParas = document.querySelectorAll('.game-card-mini p');
    miniParas.forEach(p => p.style.color = themeColor);

    // Bottom Navigation Bar
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.background = "#111";
        navBar.style.borderTop = "1px solid #222";
    }
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (!item.classList.contains('active')) item.style.color = "#666";
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
