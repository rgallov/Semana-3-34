const router = require('express').Router();
const apiRouterUser = require('./api/auth.js');
const apiRouterProduct = require('./api/product.js');

router.use('/auth', apiRouterUser);
router.use('/product', apiRouterProduct);

module.exports = router;