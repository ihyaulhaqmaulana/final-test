const express = require('express');
const { auth, authCallback } = require('./../controllers/auth');
const router = express.Router();

router.get('/auth', auth);
router.get('/callback', authCallback);

module.exports = router;
