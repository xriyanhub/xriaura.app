// config.js - Global Configuration & App Settings
const CONFIG = {
    appName: "XriAura",
    version: "1.0.0",
    apiEndpoint: "https://xriaura.onrender.com/api", // Render live server URL ba local
    security: {
        requireVerification: true, // Mandatory Gmail & Mobile verification
        sessionTimeout: 3600000 // 1 Hour
    }
};

// Global scope e expose korar jonno
window.CONFIG = CONFIG;
