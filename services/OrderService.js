const Order = require('../models/Order')

class OrderService {
    async getOrders() {
        return await Order.findAll({ raw: true })
    }

    async createOrder(order) {
        return await Order.create(order)
    }
}

module.exports = new OrderService()