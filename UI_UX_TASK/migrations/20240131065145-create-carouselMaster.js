"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface
            .createTable(
                "TBL01_CAROUSEL_MASTER",
                {
                    TBL01_CAROUSEL_MASTER_D: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                        allowNull: false,
                    },
                    TBL01_IMG_URL_N: { type: Sequelize.STRING  },
                    TBL01_ORDER_D: { type: Sequelize.INTEGER },
                    TBL01_STATUS_D: { type: Sequelize.BOOLEAN, defaultValue: 1 },
                    TBL01_CREATED_AT: {
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP()"),
                    },
                    TBL01_UPDATED_AT: {
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.literal(
                            "CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()"
                        ),
                    },
                },
                { timestamps: false }
            )
            .then(() =>
                queryInterface.addIndex("TBL01_CAROUSEL_MASTER", ["TBL01_STATUS_D"], {
                    name: "TBL01_STATUS_D_KEY1",
                })
            );
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("TBL01_CAROUSEL_MASTER");
    },
};
