const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
exports.register = async (req, res) => {
    try {
        const { username, email, password, referralCode } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const generatedReferral = 'XRI' + Math.random().toString(36).substring(2, 8).toUpperCase();

        user = new User({
            username,
            email,
            password: hashedPassword,
            referralCode: generatedReferral,
            referredBy: referralCode || null
        });

        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
        res.status(201).json({ token, user: { id: user._id, username, email, balance: user.balance } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login User
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
        res.json({ token, user: { id: user._id, username: user.username, email, balance: user.balance } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
