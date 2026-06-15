const validarObjectId = require("../middleware/validarObjectId");

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

router.get("/:id", validarObjectId, obtenerProductoPorId);

router.post("/", validarProducto, crearProducto);

router.put("/:id", validarObjectId, validarProducto, actualizarProducto);

router.delete("/:id", validarObjectId, eliminarProducto);

module.exports = router;