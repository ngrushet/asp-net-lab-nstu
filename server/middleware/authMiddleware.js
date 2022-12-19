const ApiError = require('../error/ApiError');
const { Admin } = require('../models/models');

module.exports = async function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const {adminLogin, adminPassword} = req.body;

        if ( !adminLogin || !adminPassword) {
            return (next(ApiError.badRequest('Некорректные adminLogin или adminPassword')));
        }
        const user = await Admin.findOne({where: {login: adminLogin}});
        if ( !user) {
            return next(ApiError.badRequest('Пользователь с данным adminLogin не найден'));
        }
        let compareAdminPassword = adminPassword == user.password;
        if ( !compareAdminPassword) {
            return next(ApiError.internalError('Указан неверный пароль'));
        }
        next()
    } catch (e) {
        console.log(e);
        res.status(401).json({message:'Пользователь не авторизован'})
    }
}