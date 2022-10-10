//! Imports
const { DataTypes } = require("sequelize")
const db = require("../tools/database")

const Products = db.define("products", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isAviable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

//! Exports
module.exports = Products