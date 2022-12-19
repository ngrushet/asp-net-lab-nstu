const Router = require('express');
const router = new Router();

const adminRouter = require('./adminRouter');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');

router.use('/admin',    adminRouter);
router.use('/product',  productRouter);
router.use('/category', categoryRouter);


module.exports = router;
