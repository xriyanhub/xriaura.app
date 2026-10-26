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
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, '../')));

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

// Explicit Bulletproof Route for style.css
app.get('/style.css', (req, res) => {
    const searchPaths = [
        path.join(__dirname, 'style.css'),
        path.join(__dirname, 'public', 'style.css'),
        path.join(__dirname, 'xriaura', 'style.css'),
        path.resolve(__dirname, '../style.css'),
        path.resolve('/opt/render/project/src/style.css')
    ];
    for (const p of searchPaths) {
        if (fs.existsSync(p)) {
            return res.sendFile(p);
        }
    }
    res.status(404).send('/* style.css not found */');
});

// Explicit Bulletproof Route for theme.js
app.get('/theme.js', (req, res) => {
    const searchPaths = [
        path.join(__dirname, 'theme.js'),
        path.join(__dirname, 'public', 'theme.js'),
        path.join(__dirname, 'xriaura', 'theme.js'),
        path.resolve(__dirname, '../theme.js'),
        path.resolve('/opt/render/project/src/theme.js')
    ];
    for (const p of searchPaths) {
        if (fs.existsSync(p)) {
            return res.sendFile(p);
        }
    }
    res.status(404).send('// theme.js not found');
});

// Direct HTML Serving Fallback
app.get('*', (req, res) => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XriAura - ThunderWaves Platform</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="dark-mode">
    <!-- App Container -->
    <div id="app" class="spa-container">
        <!-- Dynamic Module Content Loads Here -->
        <div id="moduleView">Loading XriAura...</div>
    </div>

    <!-- 5-Tab Fixed Bottom Navigation -->
    <nav class="bottom-nav">
        <a href="#home" class="nav-item" data-module="home">
            <span>Home</span>
        </a>
        <a href="#task" class="nav-item" data-module="task">
            <span>Task</span>
        </a>
        <a href="#earn" class="nav-item" data-module="earn">
            <span>Earn</span>
        </a>
        <a href="#refer" class="nav-item" data-module="refer">
            <span>Refer</span>
        </a>
        <a href="#profile" class="nav-item" data-module="profile">
            <span>Profile</span>
        </a>
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
