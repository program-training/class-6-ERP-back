"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
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
}, {
    timestamps: false, // Disable timestamps
});
