const express = require('express');
const router = express.Router();

const userService = require('../../../services/v1/users/users');
const authClientRequest = require('../../../middleware/authGuard');

router.get('/:userId', authClientRequest, userService.show);

module.exports = router;