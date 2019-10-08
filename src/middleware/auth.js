const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;    
    //authorization: Bearer jwt
    const token = authorization.split(' ')[1];
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.useData = decode;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        })
    }    
};