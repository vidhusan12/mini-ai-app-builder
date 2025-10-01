const express = require('express');
const router = express.Router();
const { getRequirements } = require('../controllers/requirementsController');

// POST /api/requirements
router.post('/', getRequirements);

module.exports = router;