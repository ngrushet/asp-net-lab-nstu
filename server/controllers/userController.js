const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {
        
    }

    async check(req, res) {
        const {id} = req.query
        if (!id) {
            next(ApiError.badRequest('User ID not given') )
        }
        res.json(id);
    }

}

module.exports = new UserController()