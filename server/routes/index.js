const Router = require('express');
const router = new Router();

const adminRouter = require('./adminRouter');
const categoryRouter = require('./categoryRouter');
// const brandRouter = require('./brandRouter');
const productRouter = require('./productRouter');

router.use('/admin',   adminRouter);
router.use('/category',    categoryRouter);
// router.use('/brand',   brandRouter);
router.use('/product',  productRouter);

module.exports = router;
