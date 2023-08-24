// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsControllers.js');


router.post('/product', productController.createProduct);
router.get('/product' , productController.getProduct)
router.get('/product/:id',productController.getProductById )
router.delete('/product/:id',productController.deleteProduct)
router.put('/product/:id', productController.updateProduct)

module.exports = router;