const User = require('../models/User');
const Transaction = require('../models/Transaction');

exports.addEarnings = async (req, res) => {
    try {
        const { amount, type, description } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.balance += amount;
        await user.save();

        const transaction = new Transaction({
            userId: user._id,
            type,
            amount,
            description
        });
        await transaction.save();

        res.json({ message: 'Earnings updated successfully', balance: user.balance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
