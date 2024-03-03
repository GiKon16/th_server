const express = require('express')
const ProductController = require('../controllers/ProductController')

const productRouter = new express.Router()

productRouter.get('/products', ProductController.getProducts)
productRouter.post('/products', ProductController.createProduct)

module.exports = productRouter