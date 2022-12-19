const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController {
    async create(req, res, next) {
        const {name} = req.body
        const nameExist = await Category.findOne({where: {name: name}})
        if (nameExist)      next(ApiError.internalError('Категория с таким названием уже существует'));
        
        const category = await Category.create({name})
        return res.json(category)
    }

    async getAll(req, res) {
        const categories = await Category.findAll()
        return res.json(categories);
    }
}

module.exports = new CategoryController()