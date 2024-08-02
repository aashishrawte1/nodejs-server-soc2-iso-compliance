const userUsecase = require('../usecases/userUsecase');

const register = async (req, res) => {
    try {
        const user = await userUsecase.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const token = await userUsecase.login(req.body);
        res.status(200).json({token});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = { register, login };