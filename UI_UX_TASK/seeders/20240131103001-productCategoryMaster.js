"use strict";

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            "TBL03_PRODUCT_CATEGORY_MASTER",
            [
                { TBL03_PRODUCT_CATEGORY_MASTER_D: 1, TBL01_CATEGORY_NAME_N: "Power Tools" },
                { TBL03_PRODUCT_CATEGORY_MASTER_D: 2, TBL01_CATEGORY_NAME_N: "Hand Tools" },
                { TBL03_PRODUCT_CATEGORY_MASTER_D: 3, TBL01_CATEGORY_NAME_N: "Plumbing" },
            ],
            {}
        );
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete("TBL03_PRODUCT_CATEGORY_MASTER", null, {});
    },
};
