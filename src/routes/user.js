const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

const passwordUser = 'password102030';

router.post('/singup', (req, res, next) => {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds).then(salt => {
        return bcrypt.hash(passwordUser, salt);
    }).then(hash => {
        const user = {
            user: "username",
            email: "email@email.com",
            pass: hash
        }

        return res.json({ message: "User Route", user });
    })
        .catch(err => console.error(err.message));
});

router.post('/login', (req, res, next) => {
    const { pass, user, email } = req.body.user;

    bcrypt.compare(passwordUser, pass, function (err, result) {
        if (result) {
            const token = jwt.sign(
                { user, email },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '1h' }
            );

            return res.status(200).json({
                message: "Auth successful",
                token
            });
        }

        return res.status(401).json({
            message: 'Auth failed'
        });
    });
});

module.exports = router;
