const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if(!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.authorizedUser = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
}

module.exports = authMiddleware;