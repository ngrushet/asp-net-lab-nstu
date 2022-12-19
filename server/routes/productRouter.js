const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.post ('/',       authMiddleware,     productController.create);
router.get  ('/',       productController.getAll);
router.get  ('/:id',    productController.getOne);
module.exports = router;
