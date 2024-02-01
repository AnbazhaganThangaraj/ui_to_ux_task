"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface
            .createTable(
                "TBL03_PRODUCT_CATEGORY_MASTER",
                {
                    TBL03_PRODUCT_CATEGORY_MASTER_D: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                        allowNull: false,
                    },
                    TBL01_CATEGORY_NAME_N: { type: Sequelize.STRING },
                    TBL03_STATUS_D: { type: Sequelize.BOOLEAN, defaultValue: 1 },
                    TBL03_CREATED_AT: {
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP()"),
                    },
                    TBL03_UPDATED_AT: {
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.literal(
                            "CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()"
                        ),
                    },
                    TBL03_CREATED_D: { type: Sequelize.INTEGER },
                    TBL03_UPDATED_D: { type: Sequelize.INTEGER },
                },
                { timestamps: false }
            )
            .then(() =>
                queryInterface.addIndex("TBL03_PRODUCT_CATEGORY_MASTER", ["TBL03_STATUS_D"], {
                    name: "TBL03_STATUS_D_KEY1",
                })
            );
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("TBL03_PRODUCT_CATEGORY_MASTER");
    },
};
