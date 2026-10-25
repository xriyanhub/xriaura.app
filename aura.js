document.addEventListener("DOMContentLoaded", () => {
    // ---------------------------------------------------------------------------
    // THEME CONFIGURATION (Dark & Light Mode Support)
    // ---------------------------------------------------------------------------
    const savedTheme = localStorage.getItem('aura_theme') || 'dark';
    const isLight = savedTheme === 'light';

    const themeColor = "#ffb703"; // Golden Amber Theme
    const glowShadow = isLight ? "rgba(255, 183, 3, 0.2)" : "rgba(255, 183, 3, 0.4)";
    
    // Dynamic Colors based on Mode
    const bgDark = isLight ? "#f8f9fa" : "#12100e";
    const textColor = isLight ? "#12100e" : "#ffffff";
    const cardBg = isLight ? "linear-gradient(145deg, #ffffff, #f1f3f5)" : "linear-gradient(145deg, #191612, #12100e)";
    const cardBorder = isLight ? "#dee2e6" : "#26221c";
    const subCardBg = isLight ? "#ffffff" : "#191612";
    const actionBtnBg = isLight ? "#e9ecef" : "#1f1b15";
    const actionBtnBorder = isLight ? "#ced4da" : "#2a241c";
    const navBarBg = isLight ? "#ffffff" : "#14110d";
    const rateTextColor = isLight ? "#6c757d" : "#777";

    // 1. Root Variables & Global Styling Injection
    document.documentElement.style.setProperty('--primary-glow', themeColor);
    
    // Dynamic Stylesheet Injection for Glow Animations & Base Colors
    if (!document.getElementById('aura-dynamic-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'aura-dynamic-styles';
        styleSheet.innerHTML = `
            @keyframes liveGlowPulse {
                0% { box-shadow: 0 0 15px ${glowShadow}, inset 0 0 10px rgba(255, 183, 3, 0.05); }
                50% { box-shadow: 0 0 35px ${glowShadow}, inset 0 0 20px rgba(255, 183, 3, 0.2); }
                100% { box-shadow: 0 0 15px ${glowShadow}, inset 0 0 10px rgba(255, 183, 3, 0.05); }
            }
            body {
                background-color: ${bgDark} !important;
                color: ${textColor} !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // 2. Header & User Profile Elements
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.style.background = isLight ? "#e9ecef" : "#1f1a14";
        avatar.style.border = `2px solid ${themeColor}`;
        avatar.style.color = themeColor;
        avatar.style.boxShadow = `0 0 10px ${glowShadow}`;
    }

    const levelTag = document.querySelector('.level-tag');
    if (levelTag) {
        levelTag.style.background = themeColor;
        levelTag.style.color = "#000";
    }

    const userHandle = document.querySelector('.user-handle');
    if (userHandle) {
        userHandle.style.color = themeColor;
    }

    // Theme Toggle Button Logic & Click Event
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.style.background = subCardBg;
        themeToggle.style.border = `1px solid ${cardBorder}`;
        themeToggle.style.color = themeColor;
        themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        themeToggle.onclick = () => {
            const currentTheme = localStorage.getItem('aura_theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('aura_theme', newTheme);
            location.reload();
        };
    }

    // 3. System Notice Banner
    const systemBanner = document.querySelector('.system-banner');
    if (systemBanner) {
        systemBanner.style.background = "rgba(255, 183, 3, 0.1)";
        systemBanner.style.border = `1px solid ${themeColor}`;
        systemBanner.style.color = themeColor;
    }

    // 4. Main Balance Card 3D Lighting & Pulse Animation
    const balanceCard = document.querySelector('.balance-card');
    if (balanceCard) {
        balanceCard.style.background = cardBg;
        balanceCard.style.border = `1px solid ${cardBorder}`;
        balanceCard.style.animation = "liveGlowPulse 4s infinite ease-in-out";
    }

    const balanceAmount = document.querySelector('.balance-amount');
    if (balanceAmount) {
        balanceAmount.style.color = themeColor;
        balanceAmount.style.textShadow = `0 0 20px ${glowShadow}`;
    }

    const lightningIcon = document.querySelector('.balance-icon-lg');
    if (lightningIcon) {
        lightningIcon.style.color = themeColor;
        lightningIcon.style.filter = `drop-shadow(0 0 15px ${themeColor})`;
    }

    const usdtPill = document.querySelector('.usdt-pill');
    if (usdtPill) {
        usdtPill.style.background = "rgba(34, 197, 94, 0.15)";
        usdtPill.style.border = "1px solid rgba(34, 197, 94, 0.3)";
        usdtPill.style.color = "#22c55e";
    }

    const rateText = document.querySelector('.rate-text');
    if (rateText) rateText.style.color = rateTextColor;

    // 5. Action Buttons Grid
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(btn => {
        btn.style.background = actionBtnBg;
        btn.style.border = `1px solid ${actionBtnBorder}`;
        btn.style.color = textColor;
    });

    const actionIcons = document.querySelectorAll('.action-btn i');
    actionIcons.forEach(icon => {
        icon.style.color = themeColor;
        icon.style.background = "rgba(255, 183, 3, 0.15)";
    });

    // 6. Promo Code Card & Inputs
    const promoCard = document.querySelector('.promo-card');
    if (promoCard) {
        promoCard.style.background = subCardBg;
        promoCard.style.border = `1px solid ${cardBorder}`;
    }

    const promoHeaderIcon = document.querySelector('.promo-header i');
    if (promoHeaderIcon) {
        promoHeaderIcon.style.color = themeColor;
        promoHeaderIcon.style.background = "rgba(255, 183, 3, 0.15)";
    }

    const promoInput = document.querySelector('.promo-input');
    if (promoInput) {
        promoInput.style.background = isLight ? "#ffffff" : bgDark;
        promoInput.style.border = `1px solid ${cardBorder}`;
        promoInput.style.color = textColor;
    }

    const promoBtn = document.querySelector('.promo-btn');
    if (promoBtn) {
        promoBtn.style.background = themeColor;
        promoBtn.style.color = "#000";
    }

    // 7. Daily Bonus Card
    const bonusCard = document.querySelector('.bonus-card');
    if (bonusCard) {
        bonusCard.style.background = subCardBg;
        bonusCard.style.border = `1px solid ${cardBorder}`;
    }

    const bonusIcon = document.querySelector('.bonus-icon');
    if (bonusIcon) {
        bonusIcon.style.color = themeColor;
        bonusIcon.style.background = "rgba(255, 183, 3, 0.15)";
    }

    // 8. Quick Tasks Section
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) sectionTitle.style.color = themeColor;

    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach(card => {
        card.style.background = subCardBg;
        card.style.border = `1px solid ${cardBorder}`;
    });

    const taskThumbs = document.querySelectorAll('.task-thumb');
    taskThumbs.forEach(thumb => {
        thumb.style.color = themeColor;
        thumb.style.background = "rgba(255, 183, 3, 0.15)";
    });

    const taskRewards = document.querySelectorAll('.task-reward');
    taskRewards.forEach(rew => rew.style.color = themeColor);

    const taskBtns = document.querySelectorAll('.task-btn');
    taskBtns.forEach(btn => {
        if (!btn.id.includes('adsBtn')) {
            btn.style.background = themeColor;
            btn.style.color = "#000";
        } else {
            btn.style.background = actionBtnBorder;
            btn.style.color = themeColor;
        }
    });

    // 9. Bottom Navigation Bar & Active Tab Glow
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.background = navBarBg;
        navBar.style.borderTop = `1px solid ${cardBorder}`;
    }

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
