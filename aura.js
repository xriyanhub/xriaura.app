document.addEventListener("DOMContentLoaded", () => {
    // Ekhane color change korlei puro page er shob kichu change hoye jabe
    const themeColor = "#ffb703"; // Golden Amber Theme
    const glowShadow = "rgba(255, 183, 3, 0.4)";
    const bgDark = "#0d0b09";

    // 1. Root Setup & Global Variables Injection
    const root = document.documentElement;
    root.style.setProperty('--primary-glow', themeColor);
    root.style.setProperty('--bg-color', bgDark);

    // 2. Injecting Dynamic 3D Keyframe Glow Animation via JS
    if (!document.getElementById('dynamic-glow-style')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'dynamic-glow-style';
        styleSheet.innerHTML = `
            @keyframes liveGlowPulse {
                0% { box-shadow: 0 0 15px ${glowShadow}, inset 0 0 10px rgba(255, 183, 3, 0.05); }
                50% { box-shadow: 0 0 35px ${glowShadow}, inset 0 0 20px rgba(255, 183, 3, 0.2); }
                100% { box-shadow: 0 0 15px ${glowShadow}, inset 0 0 10px rgba(255, 183, 3, 0.05); }
            }
            body {
                background-color: ${bgDark} !important;
                color: #ffffff !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // 3. Main Balance Card 3D Lighting & Animation Setup
    const balanceCard = document.querySelector('.balance-card');
    if (balanceCard) {
        balanceCard.style.background = "linear-gradient(145deg, #181410, #100e0b)";
        balanceCard.style.border = `1px solid rgba(255, 183, 3, 0.3)`;
        balanceCard.style.borderRadius = "24px";
        balanceCard.style.animation = "liveGlowPulse 4s infinite ease-in-out";
    }

    // 4. Balance Amount & Lightning Icon 3D Glow
    const balanceAmount = document.querySelector('.balance-amount');
    if (balanceAmount) {
        balanceAmount.style.color = themeColor;
        balanceAmount.style.textShadow = `0 0 20px ${glowShadow}`;
    }

    const lightningIcon = document.querySelector('.lightning-icon');
    if (lightningIcon) {
        lightningIcon.style.color = themeColor;
        lightningIcon.style.filter = `drop-shadow(0 0 15px ${themeColor})`;
    }

    // 5. Avatar Border & Glow
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.style.border = `2px solid ${themeColor}`;
        avatar.style.boxShadow = `0 0 12px ${glowShadow}`;
        avatar.style.color = themeColor;
    }

    // 6. Action Buttons Styling & 3D Depth
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(btn => {
        btn.style.background = "#14110e";
        btn.style.border = "1px solid #2a231b";
        btn.style.borderRadius = "16px";
    });

    const actionIcons = document.querySelectorAll('.action-btn i');
    actionIcons.forEach(icon => {
        icon.style.color = themeColor;
        icon.style.background = `radial-gradient(circle, rgba(255,183,3,0.2) 0%, rgba(20,17,14,1) 80%)`;
        icon.style.border = `1px solid rgba(255,183,3,0.4)`;
        icon.style.boxShadow = `0 0 10px ${glowShadow}`;
    });

    // 7. Promo & Bonus Cards Setup
    const cards = document.querySelectorAll('.promo-card, .bonus-card');
    cards.forEach(card => {
        card.style.background = "linear-gradient(145deg, #181410, #100e0b)";
        card.style.border = "1px solid #2a231b";
    });

    // 8. Redeem Button & Inputs
    const redeemBtn = document.querySelector('.promo-btn');
    if (redeemBtn) {
        redeemBtn.style.background = themeColor;
        redeemBtn.style.color = "#000";
        redeemBtn.style.fontWeight = "700";
    }

    const promoInput = document.querySelector('.promo-input');
    if (promoInput) {
        promoInput.style.background = "#100e0b";
        promoInput.style.border = "1px solid #2a231b";
        promoInput.style.color = "#fff";
    }

    // 9. Bottom Navigation Bar & Active Tab Glow
    const navBar = document.querySelector('.nav-bar');
    if (navBar) {
        navBar.style.background = "#120f0c";
        navBar.style.borderTop = "1px solid #2a231b";
    }

    const activeItem = document.querySelector('.nav-item.active');
    if (activeItem) {
        const icon = activeItem.querySelector('i');
        const span = activeItem.querySelector('span');
        if (icon) {
            icon.style.color = themeColor;
            icon.style.filter = `drop-shadow(0 0 10px ${themeColor})`;
        }
        if (span) {
            span.style.color = themeColor;
        }
    }
});
