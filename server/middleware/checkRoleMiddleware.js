const jwt = require('jsonwebtoken');
const { Admin } = require('../models/models');

module.exports = async function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    const token = req.headers.authorization.split(' ')[1] || null;
    try {
        if (!token) {
            return res.status(401).json({message:"Пользователь не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const userFound = await Admin.findOne({where: {"login": decoded.login}})
        if (!userFound) {
            return res.status(401).json({message: "У данного пользователя нет доступа"})
        }
        console.log("hello")
        req.user = decoded;
        next();
    } catch (e) {
        return res.status(500).json({message: e.message})
    }
}
