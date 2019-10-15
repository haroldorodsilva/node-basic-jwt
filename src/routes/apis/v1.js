const express = require('express');
let router = express.Router();

const userController = require('../../controllers/api/v1/users');
const authController = require('../../controllers/api/v1/auth');

router.use('/users', userController);
router.use('/auth', authController);

module.exports = router;