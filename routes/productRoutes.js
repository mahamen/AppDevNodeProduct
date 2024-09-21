const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);

router.get('/add', productController.getAddProduct);

router.post('/add', productController.postAddProduct);

router.get('/edit/:productId', productController.getEditProduct);

router.post('/edit/:productId', productController.postEditProduct);

router.post('/delete/:productId', productController.postDeleteProduct);

module.exports = router;
