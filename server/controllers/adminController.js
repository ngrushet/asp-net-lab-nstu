const ApiError = require('../error/ApiError')
const {Admin} = require('../models/models');

class AdminController {

    async addNew(req, res, next) {
        const {login, password} = req.body;

        if (!login || !password) {
            return (next(ApiError.badRequest('Некорректные login или password')));
        }
        const candidate = await Admin.findOne({where: {login}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с введенным login уже существует'));
        }
        const user = await Admin.create({login, password});
        return res.json({user: user.login, registered: true});
    }

    async login(req, res, next) {
        const {login, password} = req.body;

        if ( !login || !password) {
            return (next(ApiError.badRequest('Некорректные login или password')));
        }
        const user = await Admin.findOne({where: {login}});
        if ( !user) {
            return next(ApiError.badRequest('Пользователь с данным login не найден'));
        }
        let comparePassword = password == user.password;
        if ( !comparePassword) {
            return next(ApiError.internalError('Указан неверный пароль'));
        }
        return res.json({user: login, passed: true});
    }
}

module.exports = new AdminController()
