const express = require("express");
const router = express.Router();
const automobile = require("./automobile");

router.use("/automobile", automobile);
module.exports = router;
