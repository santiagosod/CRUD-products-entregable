//! Imports
const productsServices = require("./products.services")
const router = require("express").Router()

//* Prefijo /products

//? Peticiones
router.get("/", productsServices.getAllProducts)
router.post("/", productsServices.createProduct)
router.get("/:id", productsServices.getProductById)
router.delete("/:id", productsServices.deleteProduct)
router.patch("/:id", productsServices.patchProduct)
router.put("/:id", productsServices.patchFullProduct)

//! Exports
module.exports = router