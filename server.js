const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs'); // Debugging er jonno add kora holo

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Debugging: Server-er folder-e kon kon file gulo ashol e ache ta console-e dekhar jonno
console.log("Current Directory (__dirname):", __dirname);
try {
    console.log("Files available in directory:", fs.readdirSync(__dirname));
} catch (err) {
    console.error("Error reading directory:", err.message);
}

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Explicit route to fix Cannot GET / (Fixed with root option)
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/xriaura')
    .then(() => console.log('MongoDB Connected successfully!'))
    .catch((err) => {
        console.error(`Database Connection Error: ${err.message}`);
    });

// User Schema & Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Register Route
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

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

// Login Route
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ error: 'Invalid email or password!' });
        }

        res.json({ message: 'Login successful! 🚀', userId: user._id, username: user.username });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
