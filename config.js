// config.js - Global Configuration & App Settings
const CONFIG = {
    appName: "XriAura",
    version: "1.0.0",
    apiEndpoint: "https://xriaura-383u.onrender.com/api", // Shothik Render URL bosano holo
    security: {
        requireVerification: true, // Mandatory Gmail & Mobile verification
        sessionTimeout: 3600000 // 1 Hour
    }
};

// Global scope e expose korar jonno
window.CONFIG = CONFIG;
