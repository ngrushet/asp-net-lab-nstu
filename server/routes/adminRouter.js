const Router = require('express');

const AdminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post ('/add_new',    authMiddleware, AdminController.addNew)
router.post ('/login',      AdminController.login)

module.exports = router;