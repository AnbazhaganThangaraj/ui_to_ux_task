require("dotenv/config");
const path = require("path");
const express = require("express");
let routers = require("./routes/routes.js");
const app = express();
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./utils/swagger");
// middle wares section
app.enable("trust proxy");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(null, swaggerOptions));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});
app.use(routers);


const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`App listening at port ${port}`));
module.exports = server;
