"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProduct = exports.Product = void 0;
// products.model.ts
const connections_db_1 = require("../../utils/connections.db");
const sequelize_1 = require("sequelize");
// Product Model
exports.Product = connections_db_1.sequelize.define('products', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    salePrice: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    discountPercentage: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
});
// AdminProduct Model (Extends Product Model for Admin Specific Fields)
exports.AdminProduct = connections_db_1.sequelize.define('admin_products', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    isForSale: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    costPrice: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    supplier: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    salePrice: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    discountPercentage: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
});
// Define foreign key relationship between AdminProduct and Product
exports.AdminProduct.belongsTo(exports.Product, { foreignKey: 'id', targetKey: 'id' });
// Synchronize the models with the database
connections_db_1.sequelize.sync()
    .then(() => {
    console.log('Products and AdminProducts tables created successfully.');
})
    .catch(err => {
    console.error('Error creating tables:', err);
});
