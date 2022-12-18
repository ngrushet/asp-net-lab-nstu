const Router = require('express');
const router = new Router();
const AdminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add_new',    AdminController.addNew)
router.post('/login',    AdminController.login)
router.get('/auth', authMiddleware, AdminController.check)

module.exports = router;