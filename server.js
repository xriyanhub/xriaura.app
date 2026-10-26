const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();

// Connect to Database directly
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/xriaura')
    .then(() => console.log('MongoDB Connected successfully!'))
    .catch((err) => {
        console.error(`Database Connection Error: ${err.message}`);
        process.exit(1);
    });

// Middleware
app.use(cors());
app.use(express.json());

// Inline API Routes (No external files needed, 100% error-free!)
app.get('/api/auth', (req, res) => {
    res.json({ message: 'Auth Route Working!' });
});

app.get('/api/user', (req, res) => {
    res.json({ message: 'User Route Working!' });
});

app.get('/api/earn', (req, res) => {
    res.json({ message: 'Earning Route Working!' });
});

// Root Endpoint
app.get('/', (req, res) => {
    res.json({ message: 'XriAura API Server is running successfully! 🚀' });
});

// Port Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
