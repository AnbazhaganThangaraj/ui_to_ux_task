const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
module.exports = (sequelize, DataTypes) => {
    const brandMaster = sequelize.define(
        "TBL02_BRAND_MASTER",
        {
            value: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "TBL02_BRAND_MASTER_D",
            },
            label: { type: DataTypes.STRING, field: "TBL02_LABEL_N" },
            imgUrl: { type: DataTypes.STRING, field: "TBL02_IMG_URL_N" },
            order: { type: DataTypes.INTEGER, field: "TBL02_ORDER_D" },
            status: { type: DataTypes.BOOLEAN, field: "TBL02_STATUS_D" },
            TBL02_CREATED_AT: { type: DataTypes.DATE },
            TBL02_UPDATED_AT: { type: DataTypes.DATE },
        },
        { freezeTableName: true, timestamps: false, schema: config.database }
    );
    brandMaster.selectedFields = ["value", "label", "imgUrl", "order"];
    return brandMaster;
};
