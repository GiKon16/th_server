const express = require('express')
const OrderController = require('../controllers/OrderController')

const orderRouter = new express.Router()

orderRouter.get('/orders', OrderController.getOrders)
orderRouter.post('/orders', OrderController.createOrder)

module.exports = orderRouter