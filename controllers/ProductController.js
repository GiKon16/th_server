const ProductService = require('../services/ProductService')

class ProductController {
    async getProducts(req, res) {
        try {
            const products = await ProductService.getProducts(req.query.category)
            res.json({
                data: products
            })
        } catch (error) {
            req.status(500).json(error)
        }
    }

    async createProduct(req, res) {
        try {
            await ProductService.createProduct(req.body)
            res.json(req.body)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new ProductController()