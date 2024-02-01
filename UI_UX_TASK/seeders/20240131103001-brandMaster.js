"use strict";

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            "TBL02_BRAND_MASTER",
            [
                { TBL02_BRAND_MASTER_D: 1, TBL02_LABEL_N: "AIMPARTS", TBL02_IMG_URL_N: "https://ibb.co/yVcH6Gf", TBL02_ORDER_D: 1 },
                { TBL02_BRAND_MASTER_D: 2, TBL02_LABEL_N: "WINDENGINE", TBL02_IMG_URL_N: "https://ibb.co/dbS1v3Z", TBL02_ORDER_D: 2 },
                { TBL02_BRAND_MASTER_D: 3, TBL02_LABEL_N: "TURBOELECTRIC", TBL02_IMG_URL_N: "https://ibb.co/QJKrr7D", TBL02_ORDER_D: 3 },
                { TBL02_BRAND_MASTER_D: 4, TBL02_LABEL_N: "STARTONE", TBL02_IMG_URL_N: "https://ibb.co/chFryBX", TBL02_ORDER_D: 4 },
                { TBL02_BRAND_MASTER_D: 5, TBL02_LABEL_N: "BRANDIX", TBL02_IMG_URL_N: "https://ibb.co/ryM02WL", TBL02_ORDER_D: 5 },
                { TBL02_BRAND_MASTER_D: 6, TBL02_LABEL_N: "ABS-BRAND", TBL02_IMG_URL_N: "https://ibb.co/k0Z7nCF", TBL02_ORDER_D: 6 },
                { TBL02_BRAND_MASTER_D: 7, TBL02_LABEL_N: "GREATECIRCLE", TBL02_IMG_URL_N: "https://ibb.co/CsbYJFZ", TBL02_ORDER_D: 7 },
                { TBL02_BRAND_MASTER_D: 8, TBL02_LABEL_N: "JUSTROMB", TBL02_IMG_URL_N: "https://ibb.co/t2ywDbp", TBL02_ORDER_D: 8 },
            ],
            {}
        );
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete("TBL02_BRAND_MASTER", null, {});
    },
};
