const validarProducto = require("../middleware/validarProducto");

const express = require("express");

const router = express.Router();

const {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require("../controllers/productoController");

router.get("/", obtenerProductos);

router.get("/:id", obtenerProductoPorId);

router.post("/", validarProducto, crearProducto);

router.put("/:id", validarProducto, actualizarProducto);

router.delete("/:id", eliminarProducto);

module.exports = router;