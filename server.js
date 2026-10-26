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

// Dynamic External index.html Reader (Edits in index.html will instantly update the app & connect style.css, theme.js, modules)
app.get('*', (req, res) => {
    try {
        const indexPath = path.join(__dirname, 'index.html');
        if (fs.existsSync(indexPath)) {
            const htmlContent = fs.readFileSync(indexPath, 'utf8');
            res.setHeader('Content-Type', 'text/html');
            res.send(htmlContent);
        } else {
            // Fallback emergency HTML if index.html is missing
            res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XriAura - Missing index.html</title>
    <style>
        body { background-color: #0f172a; color: #f8fafc; font-family: sans-serif; text-align: center; padding-top: 50px; }
        .error-box { background: #1e293b; padding: 30px; border-radius: 16px; display: inline-block; border: 1px solid #ef4444; }
        h3 { color: #ef4444; }
    </style>
</head>
<body>
    <div class="error-box">
        <h3>Error: index.html not found in root directory!</h3>
        <p>Please upload your <b>index.html</b> file to the root folder to make style.css, theme.js, and modules work properly.</p>
    </div>
</body>
</html>`);
        }
    } catch (err) {
        res.status(500).send('Server Error: ' + err.message);
    }
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
