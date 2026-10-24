<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>XriAura - Admin Control Hub</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Firebase SDKs (Compat Version) -->
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            user-select: none;
        }

        body {
            padding: 16px;
            padding-bottom: 90px;
        }

        .header-top {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }

        .back-btn {
            font-size: 18px;
            text-decoration: none;
        }

        .main-title {
            font-size: 18px;
            font-weight: 900;
        }

        .menu-grid {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .menu-item {
            border-radius: 16px;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
            transition: 0.2s;
        }

        .menu-left {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .menu-icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .menu-info h3 {
            font-size: 14px;
            font-weight: 800;
            margin-bottom: 2px;
        }

        .menu-info p {
            font-size: 11px;
        }

        .menu-arrow {
            font-size: 14px;
        }
    </style>
</head>
<body>

    <div class="header-top">
        <a href="../index.html" class="back-btn"><i class="fa-solid fa-arrow-left"></i></a>
        <div class="main-title"><i class="fa-solid fa-sliders"></i> Admin Dashboard Hub</div>
    </div>

    <div class="menu-grid">
        <a href="admin.html" class="menu-item">
            <div class="menu-left">
                <div class="menu-icon"><i class="fa-solid fa-gauge"></i></div>
                <div class="menu-info">
                    <h3>Main Control Panel</h3>
                    <p>Manage announcements, limits & settings</p>
                </div>
            </div>
            <div class="menu-arrow"><i class="fa-solid fa-chevron-right"></i></div>
        </a>

        <a href="apps.html" class="menu-item">
            <div class="menu-left">
                <div class="menu-icon"><i class="fa-solid fa-layer-group"></i></div>
                <div class="menu-info">
                    <h3>Manage Apps Links</h3>
                    <p>Add, edit or remove app integrations</p>
                </div>
            </div>
            <div class="menu-arrow"><i class="fa-solid fa-chevron-right"></i></div>
        </a>

        <a href="owner_social.html" class="menu-item">
            <div class="menu-left">
                <div class="menu-icon"><i class="fa-solid fa-share-nodes"></i></div>
                <div class="menu-info">
                    <h3>Owner Social Links</h3>
                    <p>Manage social handles and channels</p>
                </div>
            </div>
            <div class="menu-arrow"><i class="fa-solid fa-chevron-right"></i></div>
        </a>
    </div>

    <!-- Linked to Profile Folder's Centralized Aura JS -->
    <script src="../aura.js"></script>
    <script>
        const tg = window.Telegram.WebApp;
        tg.expand();

        const firebaseConfig = {
            apiKey: "AIzaSyBy2MFbE-B3VcD1GjbdRUds_IH_DcQKczo",
            authDomain: "xriaura.firebaseapp.com",
            databaseURL: "https://xriaura-default-rtdb.firebaseio.com",
            projectId: "xriaura",
            storageBucket: "xriaura.firebasestorage.app",
            messagingSenderId: "937962536194",
            appId: "1:937962536194:web:a5b024c230d50a7b58d61b",
            measurementId: "G-F2W224J9CY"
        };

        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();
    </script>
</body>
</html>
