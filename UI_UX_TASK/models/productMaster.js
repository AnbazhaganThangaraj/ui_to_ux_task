const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
module.exports = (sequelize, DataTypes) => {
    const productMaster = sequelize.define(
        "TBL04_PRODUCT_MASTER",
        {
            productId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                field: "TBL04_PRODUCT_MASTER_D",
            },
            categoryId: {
                type: DataTypes.INTEGER,
                field: "TBL03_PRODUCT_CATEGORY_MASTER_D",
                set(categoryId) {
                    this.setDataValue("categoryId", categoryId?.value || categoryId);
                },
            },
            description: { type: DataTypes.STRING, field: "TBL04_DESCRIPTION_N" },
            productType: { type: DataTypes.INTEGER, field: "TBL04_PRODUCT_TYPE_D" },
            price: { type: DataTypes.INTEGER, field: "TBL04_PRICE_N" },
            reviewCount: { type: DataTypes.INTEGER, field: "TBL04_REVIEW_COUNT_D" },
            rating: { type: DataTypes.INTEGER, field: "TBL04_RATING_D" },
            imgUrl: { type: DataTypes.INTEGER, field: "TBL04_IMG_URL_N" },
            status: { type: DataTypes.BOOLEAN, field: "TBL04_STATUS_D" },
            TBL04_CREATED_AT: { type: DataTypes.DATE },
            TBL04_UPDATED_AT: { type: DataTypes.DATE },
        },
        { freezeTableName: true, timestamps: false, schema: config.database }
    );
    productMaster.associate = function (models) {
        productMaster.hasMany(models.productCategoryMaster, {
            foreignKey: "TBL03_PRODUCT_CATEGORY_MASTER_D",
            as: "productCategoryMaster",
        });
    };
    productMaster.selectedFields = ["productId", "categoryId", "description", "productType", "price", "reviewCount", "rating", "imgUrl"];
    return productMaster;
};
