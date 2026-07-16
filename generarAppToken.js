require("dotenv").config();

const jwt = require("jsonwebtoken");

const token = jwt.sign(
    {
        app: "api1-catalogo-productos"
    },
    process.env.APP_TOKEN_SECRET,
    {
        expiresIn: "365d"
    }
);

console.log("\n===== APPLICATION TOKEN =====\n");
console.log(token);
console.log("\n=============================\n");