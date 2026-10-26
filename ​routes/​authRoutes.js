const express = require('express');
const router = express.Router();

// Auth Test Route
router.get('/', (req, res) => {
    res.json({ message: 'Auth Route is working perfectly!' });
});

module.exports = router;
