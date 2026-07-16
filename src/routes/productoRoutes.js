const express = require("express");

const router = express.Router();

const validarObjectId = require("../middleware/validarObjectId");
const validarProducto = require("../middleware/validarProducto");
const validarAppToken = require("../middleware/validarAppToken");

const {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require("../controllers/productoController");

// Todas las rutas protegidas con Application Token

router.get(
    "/",
    validarAppToken,
    obtenerProductos
);

router.get(
    "/:id",
    validarAppToken,
    validarObjectId,
    obtenerProductoPorId
);

router.post(
    "/",
    validarAppToken,
    validarProducto,
    crearProducto
);

router.put(
    "/:id",
    validarAppToken,
    validarObjectId,
    validarProducto,
    actualizarProducto
);

router.delete(
    "/:id",
    validarAppToken,
    validarObjectId,
    eliminarProducto
);

module.exports = router;