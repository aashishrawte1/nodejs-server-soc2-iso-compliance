const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

const register = async ({ username, email, password }) => {
    const existingUser = await User.findOne({ email });
    if(existingUser) {
        throw new Error(`User ${username} already exists`);
    }

    const user = new User({ username, email, password });
    await user.save();
    return user;
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if(!user) {
        throw new Error('Invalid email or password');
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user._id, username: user.username}, jwtSecret, { expiresIn: '1h' });
    return token;
};

module.exports = { register, login };