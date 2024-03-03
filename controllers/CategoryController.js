const CategoryService = require('../services/CategoryService')

class CategoryController {
    async getCategories(req, res) {
        try {
            const categories = await CategoryService.getCategories()
            res.json({
                data: categories
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async createCategory(req, res) {
        try {
            await CategoryService.createCategory(req.body)
            res.json(category)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new CategoryController()