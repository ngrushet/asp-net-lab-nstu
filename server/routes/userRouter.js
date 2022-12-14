const Router = require('express');
const router = new Router();

router.post('/registration',)
router.get('/login',)

router.get('/auth',(req, res) => {
    res.json({'message': 'hui'})
})

module.exports = router;