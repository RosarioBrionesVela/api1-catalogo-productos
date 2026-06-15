const { body, validationResult } = require("express-validator");

const validarProducto = [
    body("nombre")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({ min: 3 })
        .withMessage("El nombre debe tener al menos 3 caracteres"),

    body("categoria")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("La categoria es obligatoria"),

    body("precio")
        .isFloat({ min: 0.01 })
        .withMessage("El precio debe ser mayor a 0"),

    body("descripcion")
        .optional()
        .trim()
        .escape(),

    (req, res, next) => {
        const errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }

        next();
    }
];

module.exports = validarProducto;