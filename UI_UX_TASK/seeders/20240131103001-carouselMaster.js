"use strict";

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            "TBL01_CAROUSEL_MASTER",
            [
                { TBL01_CAROUSEL_MASTER_D: 1, TBL01_IMG_URL_N: "https://ibb.co/4Ttx1zN", TBL01_ORDER_D: 1 },
                { TBL01_CAROUSEL_MASTER_D: 2, TBL01_IMG_URL_N: "https://ibb.co/cg9Szmk", TBL01_ORDER_D: 1 },
                { TBL01_CAROUSEL_MASTER_D: 3, TBL01_IMG_URL_N: "https://ibb.co/kDDq9L0", TBL01_ORDER_D: 1 },
                { TBL01_CAROUSEL_MASTER_D: 4, TBL01_IMG_URL_N: "https://ibb.co/b23fQYL", TBL01_ORDER_D: 2 },
                { TBL01_CAROUSEL_MASTER_D: 5, TBL01_IMG_URL_N: "https://ibb.co/swVzP34", TBL01_ORDER_D: 2 },
            ],
            {}
        );
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete("TBL01_CAROUSEL_MASTER", null, {});
    },
};
