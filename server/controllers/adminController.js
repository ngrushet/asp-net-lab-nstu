const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {Admin} = require('../models/models');

const generateJwt = (id, login) => {
    return jwt.sign(
        {id, login},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class AdminController {

    async addNew(req, res, next) {
        const {login, password} = req.body;
        if(!login || !password) {
            return (next(ApiError.badRequest('Некорректные login или password')))
        }
        const candidate = await Admin.findOne({where: {login}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с введенным login уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await Admin.create({login, password: hashPassword})
        const token = generateJwt(user.id, user.login)
        return res.json({token})
    }

    async login(req, res, next) {
        const {login, password} = req.body
        if (!login || !password) {
            return (next(ApiError.badRequest('Некорректные login или password')))
        }
        const user = await Admin.findOne({where: {login}})
        if (!user) {
            return next(ApiError.badRequest('Пользователь с данным login не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internalError('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.login);
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.login)
        return res.json({token})
    }

}

module.exports = new AdminController()
