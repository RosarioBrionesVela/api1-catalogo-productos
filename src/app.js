const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API funcionando correctamente");
});

app.use("/api/productos", require("./routes/productoRoutes"));

module.exports = app;