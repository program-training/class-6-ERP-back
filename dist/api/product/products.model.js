"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProduct = exports.Product = void 0;
const connections_db_1 = require("../../utils/connections.db");
const sequelize_1 = require("sequelize");
// Product Model
exports.Product = connections_db_1.sequelize.define('products', {
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    sale_price: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
    },
    category: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    discount_percentage: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    image_url: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    image_alt: {
        type: sequelize_1.DataTypes.STRING(255),
    },
});
// AdminProduct Model (Extends Product Model for Admin Specific Fields)
exports.AdminProduct = connections_db_1.sequelize.define('admin_products', {
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    is_for_sale: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    cost_price: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    supplier: {
        type: sequelize_1.DataTypes.STRING(255),
    },
});
// Define foreign key relationship between AdminProduct and Product
exports.AdminProduct.belongsTo(exports.Product, { foreignKey: 'product_id' });
// Synchronize the models with the database
connections_db_1.sequelize.sync()
    .then(() => {
    console.log('Products and AdminProducts tables created successfully.');
})
    .catch(err => {
    console.error('Error creating tables:', err);
});
