const sanitizeObject = (obj) => {
    if (!obj || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(sanitizeObject);
    }

    const sanitized = {};

    for (const [key, value] of Object.entries(obj)) {
        // Eliminar claves que comienzan con $ o contienen .
        if (key.startsWith("$") || key.includes(".")) {
            continue;
        }

        sanitized[key] =
            typeof value === "object"
                ? sanitizeObject(value)
                : value;
    }

    return sanitized;
};

const sanitizeRequest = (req, res, next) => {
    // Sanitizar el body
    if (req.body) {
        req.body = sanitizeObject(req.body);
    }

    // Sanitizar parámetros de URL
    if (req.params) {
        req.params = sanitizeObject(req.params);
    }

    // Sanitizar query sin modificar req.query directamente
    // debido a la compatibilidad con Express 5.
    if (req.query) {
        const sanitizedQuery = sanitizeObject(req.query);

        Object.defineProperty(req, "query", {
            value: sanitizedQuery,
            writable: true,
            configurable: true
        });
    }

    next();
};

module.exports = sanitizeRequest;