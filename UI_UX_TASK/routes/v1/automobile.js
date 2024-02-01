const express = require("express");
const router = express.Router();
const { AutomobileController } = require("../../controllers");
console.log("im in..")
router.get(
    "/getHomepageDetails",
    AutomobileController.getHomepageDetails
);
router.get(
    "/featuredProducts",
    AutomobileController.featuredProducts
);
module.exports = router;
