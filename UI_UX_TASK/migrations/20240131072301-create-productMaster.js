"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface
            .createTable(
                "TBL04_PRODUCT_MASTER",
                {
                    TBL04_PRODUCT_MASTER_D: {
                        primaryKey: true,
                        autoIncrement: true,
                        allowNull: false,
                        type: Sequelize.INTEGER,
                    },
                    TBL03_PRODUCT_CATEGORY_MASTER_D: { type: Sequelize.INTEGER },
                    TBL04_DESCRIPTION_N: { type: Sequelize.STRING },
                    TBL04_PRICE_N: { type: Sequelize.STRING },
                    TBL04_REVIEW_COUNT_D: { type: Sequelize.INTEGER },
                    TBL04_RATING_D: { type: Sequelize.INTEGER },
                    TBL04_IMG_URL_N: { type: Sequelize.STRING },
                    TBL04_PRODUCT_TYPE_D: { type: Sequelize.INTEGER },
                    TBL04_STATUS_D: { type: Sequelize.BOOLEAN, defaultValue: 1 },
                    TBL04_CREATED_AT: {
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP()"),
                    },
                    TBL04_UPDATED_AT: {
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.literal(
                            "CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()"
                        ),
                    },
                },
                {
                    timestamps: false,
                }
            )
            .then(() =>
                queryInterface.addConstraint("TBL04_PRODUCT_MASTER", {
                    fields: ["TBL03_PRODUCT_CATEGORY_MASTER_D"],
                    type: "foreign key",
                    name: "TBL04_PRODUCT_MASTER_TBL03_PRODUCT_CATEGORY_MASTER_D_FKEY",
                    references: {
                        table: "TBL03_PRODUCT_CATEGORY_MASTER",
                        field: "TBL03_PRODUCT_CATEGORY_MASTER_D",
                    },
                    onDelete: "cascade",
                    onUpdate: "cascade",
                })
            )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("TBL04_PRODUCT_MASTER");
    },
};
