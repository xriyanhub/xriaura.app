const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { addEarnings } = require('../controllers/earningController');

router.post('/add', auth, addEarnings);

module.exports = router;
