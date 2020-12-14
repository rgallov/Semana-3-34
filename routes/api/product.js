const router = require('express').Router();
const product_controller = require('../../controllers/productController');

//api/product/list
router.post('/list',product_controller.list);
//api/product/edit
router.post('/edit',product_controller.edit);
//api/product/register
router.post('/register',product_controller.register);
//api/product/searchByCode
router.post('/searchByCode',product_controller.searchByCode);
//api/product/delete
router.post('/delete',product_controller.delete);

module.exports = router;