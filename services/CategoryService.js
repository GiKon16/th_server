const Category = require('../models/Category')

class CategoryService {
    async getCategories() {
        return await Category.findAll({ raw: true })
    }

    async createCategory(category) {
        return await Category.create(category)
    }
}

module.exports = new CategoryService()