const express = require('express');
const router = express.Router();

// Auth Test Route
router.get('/', (req, res) => {
    res.json({ message: 'Auth Route is working perfectly!' });
});

// Basic Register Route
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Try importing User model safely inside try-catch
        let User;
        try {
            User = require('../models/User');
        } catch (e) {
            try {
                User = require('../models/user');
            } catch (err) {
                return res.status(500).json({ error: 'User model file not found!' });
            }
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already registered!' });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully! 🎉', userId: newUser._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Basic Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        let User;
        try {
            User = require('../models/User');
        } catch (e) {
            User = require('../models/user');
        }

        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ error: 'Invalid email or password!' });
        }

        res.json({ message: 'Login successful! 🚀', userId: user._id, username: user.username });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
