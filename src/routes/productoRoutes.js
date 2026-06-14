const validarProducto = require("../middleware/validarProducto");

const express = require("express");

const router = express.Router();

const {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto
} = require("../controllers/productoController");

router.get("/", obtenerProductos);

router.get("/:id", obtenerProductoPorId);

router.post("/", validarProducto, crearProducto);

module.exports = router;