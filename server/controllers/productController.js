const {Product, Category} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProductController {
    async create(req, res, next) {
        console.log("Product create:");
        try {
            let {title, categoryId, description} = req.body;
            const categoryExist = await Category.findOne({where: {id: categoryId}}) 
            if (!categoryExist) {
                next(ApiError.internalError('Категория с данным номером не существует'))
            } else {
                const product = await Product.create({categoryId: categoryId, title: title, description: description});
                return res.json(product);
            }
        } catch (e) {
            next(ApiError.internalError(e.message));
        }
    }

    async getAll(req, res) {    
        let {categoryId, limit, page} = req.query;  
        limit = limit || 10;
        page =  page || 1;
        let offset = (page - 1) * limit;
        let products;
        if(!categoryId) {
            products = await Product.findAndCountAll({limit, offset})
        }
        if(categoryId) {
            products = await Product.findAndCountAll({where: {categoryId}, limit, offset})
        }
        return res.json(products);
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne({
            where: {id},
        })
        return res.json(product);
    }
}

module.exports = new ProductController()
