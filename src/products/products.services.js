//! Imports
const productsControllers = require("./products.controllers")

//? Funciones
const getAllProducts = (req, res) => {
    productsControllers.getAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getProductById = (req, res) => {
    const id = req.params.id

    productsControllers.getProductById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: "Invalid ID" })
            }
        })
        .catch(err => {
            res.status(404).json({ message: err.message })
        })
}

const createProduct = (req, res) => {
    const data = req.body

    if (data.name && data.category && data.price && data.isAviable !== undefined) {
        productsControllers.createProduct(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({ message: err.message })
            })
    } else {
        res.status(400).json({ message: "Missing data" })
    }
}

const deleteProduct = (req, res) => {
    const id = req.params.id

    productsControllers.deleteProduct(id)
        .then(response => {
            if (response) {
                res.status(204).json(response)
            } else {
                res.status(400).json({ message: "invalid ID" })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const patchProduct = (req, res) => {
    const id = req.params.id
    const { name, category, price, isAviable } = req.body

    productsControllers.editProduct(id, { name, category, price, isAviable })
        .then(response => {
            if(response[0]){
                res.status(200).json({message: `Product with id: ${id} edited succesfully!`})
            } else {
                res.status(404).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const patchFullProduct = (req, res) => {
    const id = req.params.id
    const { name, category, price, isAviable } = req.body

    if(name && category && price && isAviable !== undefined){
        productsControllers.editProduct(id, { name, category, price, isAviable })
            .then(response => {
                if(response[0]){
                    res.status(200).json({message: `Product with id: ${id} edited succesfully!`})
                } else {
                    res.status(404).json({message: "Invalid ID"})
                }
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(404).json({message: "Missing data"})
    }
}

//! Exports
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    patchFullProduct,
    patchProduct,
    deleteProduct
}