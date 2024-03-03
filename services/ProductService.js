const Product = require('../models/Product')

class ProductService {
    async getProducts(categoryId) {
        return categoryId ? await Product.findAll({ 
            where: {
                categoryId: categoryId
            }
        }) : await Product.findAll({ raw: true })
    }

    async createProduct(product) {
        return await Product.create(product)
    }
}

module.exports = new ProductService()