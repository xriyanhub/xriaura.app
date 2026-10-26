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

// Comprehensive Bulletproof Fallback route for index.html with recursive directory scanning
app.get('*', (req, res) => {
    const searchDirs = [
        __dirname,
        path.join(__dirname, 'public'),
        path.join(__dirname, 'xriaura'),
        path.resolve(__dirname, '..'),
        path.resolve('/opt/render/project/src')
    ];

    let foundPath = null;
    
    // Search index.html in all possible standard locations
    for (const dir of searchDirs) {
        const filePath = path.join(dir, 'index.html');
        if (fs.existsSync(filePath)) {
            foundPath = filePath;
            break;
        }
    }

    // Recursive search in subdirectories if not found in root
    if (!foundPath) {
        try {
            const files = fs.readdirSync(__dirname);
            for (const file of files) {
                const fullPath = path.join(__dirname, file);
                if (fs.statSync(fullPath).isDirectory()) {
                    const subIndex = path.join(fullPath, 'index.html');
                    if (fs.existsSync(subIndex)) {
                        foundPath = subIndex;
                        break;
                    }
                }
            }
        } catch (e) {
            console.log('Directory scan error:', e.message);
        }
    }

    if (foundPath) {
        res.sendFile(foundPath);
    } else {
        res.status(404).send(`Not Found: index.html could not be located in directory: ${__dirname}`);
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
