"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface
            .createTable(
                "TBL02_BRAND_MASTER",
                {
                    TBL02_BRAND_MASTER_D: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                        allowNull: false,
                    },
                    TBL02_LABEL_N: { type: Sequelize.STRING },
                    TBL02_IMG_URL_N: { type: Sequelize.STRING },
                    TBL02_ORDER_D: { type: Sequelize.INTEGER },
                    TBL02_STATUS_D: { type: Sequelize.BOOLEAN, defaultValue: 1 },
                    TBL02_CREATED_AT: {
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP()"),
                    },
                    TBL02_UPDATED_AT: {
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.literal(
                            "CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()"
                        ),
                    },
                },
                { timestamps: false }
            )
            .then(() =>
                queryInterface.addIndex("TBL02_BRAND_MASTER", ["TBL02_STATUS_D"], {
                    name: "TBL02_STATUS_D_KEY1",
                })
            );
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("TBL02_BRAND_MASTER");
    },
};
