const express = require('express');
const router = express.Router();

const authService = require('../../../services/v1/auth/auth');
const validation = require('../../../middleware/validation');

router.post('/register', validation.validateRegistrationBody(), authService.register);
router.post('/login', validation.validateLoginBody(), authService.login);

module.exports = router