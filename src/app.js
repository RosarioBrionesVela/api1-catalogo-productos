const express = require("express");
const helmet = require("helmet");

const sanitizeRequest = require("./middleware/sanitizeRequest");

const app = express();

// Middleware de seguridad
app.use(helmet());

// Middleware para leer JSON
app.use(express.json());

// Sanitización contra NoSQL Injection
app.use(sanitizeRequest);

app.get("/", (req, res) => {
    res.send("API funcionando correctamente");
});

app.use("/api/productos", require("./routes/productoRoutes"));

module.exports = app;