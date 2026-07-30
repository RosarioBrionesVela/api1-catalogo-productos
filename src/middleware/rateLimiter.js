const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: {
        mensaje: "Demasiadas solicitudes. Intenta nuevamente más tarde."
    }
});

module.exports = rateLimiter;