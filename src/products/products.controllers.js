//! Imports
const Products = require("../models/products.models")
const uuid = require("uuid")

//? Funciones
const getAllProducts = async () => {
    const data = await Products.findAll()

    return data
}

const getProductById = async id => {
    const data = await Products.findOne({
        where:{
            id
        }
    })

    return data
}

const createProduct = async data => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAviable: data.isAviable
    })

    return newProduct
}

const deleteProduct = async id => {
    const data = await Products.destroy({
        where: {
            id
        }
    })

    return data
}

const editProduct = async (id, data) => {
    const response = await Products.update(data, {
        where: {
            id
        }
    })

    return response
}

//! Exports
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    editProduct
}