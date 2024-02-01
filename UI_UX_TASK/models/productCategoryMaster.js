const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
module.exports = (sequelize, DataTypes) => {
    const productCategoryMaster = sequelize.define(
        "TBL03_PRODUCT_CATEGORY_MASTER",
        {
            value: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: "TBL03_PRODUCT_CATEGORY_MASTER_D",
            },
            label: { type: DataTypes.STRING, field: "TBL01_CATEGORY_NAME_N" },
            status: { type: DataTypes.BOOLEAN, field: "TBL05_STATUS_D" },
            TBL03_CREATED_AT: { type: DataTypes.DATE },
            TBL03_UPDATED_AT: { type: DataTypes.DATE },
        },
        { freezeTableName: true, timestamps: false, schema: config.database }
    );
    productCategoryMaster.selectedFields = ["value", "label"];
    return productCategoryMaster;
};
