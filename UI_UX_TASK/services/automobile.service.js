const models = require("../models/index.js");
const messages = require("../config/errorMsgs.js");
const errorCodes = require("../config/errorCodes.js");
const { DELETE_STATUS, PRODUCT_CATEGORY, BANNER_TYPE, PRODUCT_TYPE } = require("../constants");

class AutomobileService {
    async getHomepageDetailsService(params) {
        try {

            const [
                carouselData, 
                posterImageData, 
                brandData, 
                topRatedProducts,
                specialOfferProducts,
                bestSellers,
            ] = await Promise.all([
                models.carouselMaster.findAll({
                    where: { status: DELETE_STATUS.ACTIVE, order: BANNER_TYPE.CAROUSEL },
                    attributes: models.carouselMaster.selectedFields,
                    raw: true,
                }),
                models.carouselMaster.findAll({
                    where: { status: DELETE_STATUS.ACTIVE, order: BANNER_TYPE.POSTER },
                    attributes: models.carouselMaster.selectedFields,
                    raw: true,
                }),
                models.brandMaster.findAll({
                    where: { status: DELETE_STATUS.ACTIVE, },
                    attributes: models.brandMaster.selectedFields,
                    raw: true,
                    order: [["TBL02_ORDER_D", "ASC"]]
                }),
                models.productMaster.findAll({
                    where: { status: DELETE_STATUS.ACTIVE, productType: PRODUCT_TYPE.TOP_RATED },
                    attributes: models.productMaster.selectedFields,
                    raw: true,
                    limit: 3,
                }),
                models.productMaster.findAll({
                    where: { status: DELETE_STATUS.ACTIVE, productType: PRODUCT_TYPE.SPECIAL_OFFERS },
                    attributes: models.productMaster.selectedFields,
                    raw: true,
                    limit: 3,
                }),
                models.productMaster.findAll({
                    where: { status: DELETE_STATUS.ACTIVE, productType: PRODUCT_TYPE.BEST_SELLERS },
                    attributes: models.productMaster.selectedFields,
                    raw: true,
                    limit: 3,
                }),
            ]);
            const data = {
                carouselData, 
                posterImageData,
                brandData,
                topRatedProducts,
                specialOfferProducts,
                bestSellers,
            }

            return { code: errorCodes.HTTP_OK, message: messages.success, data };
        } catch (err) {
            return { code: errorCodes.HTTP_INTERNAL_SERVER_ERROR, message: err };
        }
    }
    async featuredProductsService(params) {
        try {
            const { categoryId = null } = params;
            const filterCondition = categoryId ? { categoryId } : {};
            const data = await models.productMaster.findAll({
                where: { status: DELETE_STATUS.ACTIVE, ...filterCondition },
                attributes: models.productMaster.selectedFields,
                raw: true,
            });

            return { code: errorCodes.HTTP_OK, message: messages.success, data };
        } catch (err) {
            return { code: errorCodes.HTTP_INTERNAL_SERVER_ERROR, message: err };
        }
    }
}
module.exports = new AutomobileService();
