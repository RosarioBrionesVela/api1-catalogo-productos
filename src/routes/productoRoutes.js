const express = require("express");

const router = express.Router();

const {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto
} = require("../controllers/productoController");

router.get("/", obtenerProductos);

router.get("/:id", obtenerProductoPorId);

router.post("/", crearProducto);

module.exports = router;