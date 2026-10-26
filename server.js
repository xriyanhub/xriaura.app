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

// Route Import (Apnar repository-te thaka alada routes gulo connect korar jonno)
try {
    const authRoutes = require('./routes/authRoutes');
    const userRoutes = require('./routes/userRoutes');
    const earningRoutes = require('./routes/earningRoutes');

    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/earnings', earningRoutes);
    console.log('All modular routes loaded successfully!');
} catch (err) {
    console.log('Notice: Some modular routes were not loaded directly, running base server.', err.message);
}

// Bulletproof route for index.html with multi-path checking
app.get('/', (req, res) => {
    const possiblePaths = [
        path.join(__dirname, 'index.html'),
        path.join(__dirname, 'xriaura', 'index.html'),
        path.resolve(__dirname, '../index.html')
    ];

    let foundPath = null;
    for (const p of possiblePaths) {
        if (fs.existsSync(p)) {
            foundPath = p;
            break;
        }
    }

    if (foundPath) {
        res.sendFile(foundPath);
    } else {
        res.status(404).send(`Not Found: index.html not found in directory: ${__dirname}`);
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
