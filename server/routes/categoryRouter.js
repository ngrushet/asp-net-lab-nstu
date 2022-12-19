const Router = require('express');
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

router.post('/',    authMiddleware,     categoryController.create);
router.get('/',     categoryController.getAll);

module.exports = router;