const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
module.exports = (sequelize, DataTypes) => {
    const carouselMaster = sequelize.define(
        "TBL01_CAROUSEL_MASTER",
        {
            value: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                field: "TBL01_CAROUSEL_MASTER_D",
            },
            imgUrl: { type: DataTypes.STRING, field: "TBL01_IMG_URL_N" },
            order: { type: DataTypes.BOOLEAN, field: "TBL01_ORDER_D" },
            status: { type: DataTypes.BOOLEAN, field: "TBL01_STATUS_D" },
            TBL01_CREATED_AT: { type: DataTypes.DATE },
            TBL01_UPDATED_AT: { type: DataTypes.DATE },
        },
        { freezeTableName: true, timestamps: false, schema: config.database }
    );
    carouselMaster.selectedFields = ["value", "imgUrl", "order"];
    return carouselMaster;
};
