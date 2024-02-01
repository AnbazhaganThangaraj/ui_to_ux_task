const automobileService = require("../services/automobile.service.js");
const errorCodes = require("../config/errorCodes.js");
class AutomobileController {
    async getHomepageDetails(req, res) {
        try {
            let result = await automobileService.getHomepageDetailsService();
            res.status(result.code).send(result);
        } catch (err) {
            response.error(req, res, errorCodes.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }
    async featuredProducts(req, res) {
        try {
            let result = await automobileService.featuredProductsService({ 
                ...req.query, 
            });
            res.status(result.code).send(result);
        } catch (err) {
            response.error(req, res, errorCodes.HTTP_INTERNAL_SERVER_ERROR, err);
        }
    }
}
module.exports = new AutomobileController();
