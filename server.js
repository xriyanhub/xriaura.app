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

// Deep Finder for index.html so it never fails
const findIndexHtml = (dir) => {
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (entry.name === 'node_modules' || entry.name === '.git') continue;
                const found = findIndexHtml(fullPath);
                if (found) return found;
            } else if (entry.name === 'index.html') {
                return fullPath;
            }
        }
    } catch (e) {}
    return null;
};

// Fallback route that serves the physical index.html file dynamically
app.get('*', (req, res) => {
    let foundPath = findIndexHtml(__dirname) || 
                    findIndexHtml(path.resolve(__dirname, '..')) || 
                    findIndexHtml('/opt/render/project');

    if (foundPath && fs.existsSync(foundPath)) {
        console.log('Serving physical index.html from:', foundPath);
        return res.sendFile(foundPath);
    } else {
        res.status(404).send('Error: index.html file not found in repository. Please make sure index.html is pushed to GitHub.');
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
