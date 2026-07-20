const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

// Middleware de seguridad
app.use(helmet());

// Middleware para leer JSON
app.use(express.json());

// Sanitización 
// app.use(mongoSanitize());

app.get("/", (req, res) => {
    res.send("API funcionando correctamente");
});

app.use("/api/productos", require("./routes/productoRoutes"));

module.exports = app;