const Producto = require("../models/Producto");

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();

        res.json(productos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener productos"
        });
    }
};

// Obtener producto por ID
const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.json(producto);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al buscar producto"
        });
    }
};

// Crear producto
const crearProducto = async (req, res) => {
    try {
        const producto = await Producto.create(req.body);

        res.status(201).json(producto);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear producto"
        });
    }
};

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto
};