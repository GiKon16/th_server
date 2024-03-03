const OrderService = require('../services/OrderService')

class OrderController {
    async getOrders(req, res) {
        try {
            const orders = await OrderService.getOrders()
            res.json({
                data: orders
            })
        } catch (error) {
            req.status(500).json(error)
        }
    }

    async createOrder(req, res) {
        try {
            await OrderService.createOrder(req.body)
            res.json(req.body)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new OrderController()