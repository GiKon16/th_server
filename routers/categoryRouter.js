const express = require('express')
const CategoryController = require('../controllers/CategoryController')

const categoryRouter = new express.Router()

categoryRouter.get('/categories', CategoryController.getCategories)
categoryRouter.post('/categories', CategoryController.createCategory)

module.exports = categoryRouter