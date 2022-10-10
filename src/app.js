//! Imports
const express = require("express")
const app = express()
const db = require("./tools/database")
const initModels = require("./models/initModels")
const productRouter = require("./products/products.router")

//* Port
const { port } = require("./config")

//* Autenticacion & Sync & initModels
db.authenticate()
    .then(() => console.log("DB Authentication succesfully"))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log("Database Synced"))
    .catch(err => console.log(err))

initModels()

//? Funciones APP
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({message: "OK!"})
})

app.use("/products", productRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})