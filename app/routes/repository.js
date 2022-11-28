const express = require('express');
const { listRepositories } = require('../controllers/repository');
const router = express.Router();

router.get('/repositories', listRepositories);

module.exports = router;
