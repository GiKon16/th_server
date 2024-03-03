const { Sequelize, DataTypes } = require('sequelize')
const Category = require('./Category')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/tandirhana_db.db'
})

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.REAL,
        allowNull: true
    },
    weight: {
        type: DataTypes.REAL,
        allowNull: true
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Category,
            key: 'id'
        }
    }   
}, {
    timestamps: false
})

Product.sync({ alter: true }).then(result => {
    console.log(result)
})
.catch(err => console.log(err))

module.exports = Product


