const express = require('express');
const router = express.Router();
// @route Get api/users
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;