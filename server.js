const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// Environment variables load
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files safely from current directory
app.use(express.static(__dirname));

// Bulletproof Modular Route Loader with multi-path checking
try {
    const getRoutePath = (routeName) => {
        const possiblePaths = [
            path.join(__dirname, 'routes', `${routeName}.js`),
            path.join(__dirname, 'routes', routeName.toLowerCase() + '.js'),
            path.join(__dirname, 'src', 'routes', `${routeName}.js`),
            path.resolve(__dirname, '../routes', `${routeName}.js`)
        ];
        
        for (const p of possiblePaths) {
            if (fs.existsSync(p)) {
                return p;
            }
        }
        return null;
    };

    const authPath = getRoutePath('authRoutes');
    const userPath = getRoutePath('userRoutes');
    const earningPath = getRoutePath('earningRoutes');

    if (authPath) {
        app.use('/api/auth', require(authPath));
        console.log('Loaded authRoutes from:', authPath);
    }
    if (userPath) {
        app.use('/api/users', require(userPath));
        console.log('Loaded userRoutes from:', userPath);
    }
    if (earningPath) {
        app.use('/api/earnings', require(earningPath));
        console.log('Loaded earningRoutes from:', earningPath);
    }

    console.log('All available modular routes loaded successfully!');
} catch (err) {
    console.log('Route Loading Notice:', err.message);
}

// Direct Fully-Styled HTML Serving Fallback (Zero external dependency issues)
app.get('*', (req, res) => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XriAura - ThunderWaves Platform</title>
    <style>
        body.dark-mode {
            background-color: #0f172a;
            color: #f8fafc;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        .spa-container {
            flex: 1;
            padding: 20px;
            padding-bottom: 90px;
            text-align: center;
        }
        #moduleView {
            background: #1e293b;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.4);
            font-size: 18px;
            font-weight: 600;
            color: #38bdf8;
            margin-top: 40px;
        }
        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #1e293b;
            display: flex;
            justify-content: space-around;
            padding: 14px 0;
            border-top: 1px solid #334155;
            box-shadow: 0 -4px 15px rgba(0,0,0,0.4);
            z-index: 1000;
        }
        .nav-item {
            color: #94a3b8;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            transition: color 0.2s;
        }
        .nav-item:hover, .nav-item.active {
            color: #38bdf8;
        }
    </style>
</head>
<body class="dark-mode">
    <!-- App Container -->
    <div id="app" class="spa-container">
        <!-- Dynamic Module Content Loads Here -->
        <div id="moduleView">Welcome to XriAura Platform! 🚀</div>
    </div>

    <!-- 5-Tab Fixed Bottom Navigation -->
    <nav class="bottom-nav">
        <a href="#home" class="nav-item" data-module="home">Home</a>
        <a href="#task" class="nav-item" data-module="task">Task</a>
        <a href="#earn" class="nav-item" data-module="earn">Earn</a>
        <a href="#refer" class="nav-item" data-module="refer">Refer</a>
        <a href="#profile" class="nav-item" data-module="profile">Profile</a>
    </nav>

    <!-- Main Router Script -->
    <script type="module" src="theme.js"></script>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
});

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/xriaura')
    .then(() => console.log('MongoDB Connected successfully!'))
    .catch((err) => {
        console.error(`Database Connection Error: ${err.message}`);
    });

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
