const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve static frontend files directly from current directory
app.use(express.static(__dirname));

// Modular Route Loader
try {
    const getRoutePath = (routeName) => {
        const possiblePaths = [
            path.join(__dirname, 'routes', `${routeName}.js`),
            path.join(__dirname, 'routes', routeName.toLowerCase() + '.js'),
            path.join(__dirname, 'src', 'routes', `${routeName}.js`),
            path.resolve(__dirname, '../routes', `${routeName}.js`)
        ];
        
        for (const p of possiblePaths) {
            if (fs.existsSync(p)) return p;
        }
        return null;
    };

    const authPath = getRoutePath('authRoutes');
    const userPath = getRoutePath('userRoutes');
    const earningPath = getRoutePath('earningRoutes');

    if (authPath) app.use('/api/auth', require(authPath));
    if (userPath) app.use('/api/users', require(userPath));
    if (earningPath) app.use('/api/earnings', require(earningPath));

    console.log('All available modular routes loaded successfully!');
} catch (err) {
    console.log('Route Loading Notice:', err.message);
}

// Clean SPA Fallback to external index.html
app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    console.log('Looking for index.html at:', indexPath);
    
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        console.error('ERROR: index.html missing in directory:', __dirname);
        res.status(404).send('Error: index.html not found in root directory. Please check if index.html is pushed to GitHub.');
    }
});

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/xriaura')
    .then(() => console.log('MongoDB Connected successfully!'))
    .catch((err) => console.error(`Database Connection Error: ${err.message}`));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
