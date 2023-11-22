// products.model.ts
import { sequelize } from "../../utils/connections.db";
import { DataTypes, Model } from 'sequelize';
import { ShopProductInterface } from './products.interface';

// Product Model
export const Product = sequelize.define<Model<ShopProductInterface>>('products', {
    product_id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sale_price: {
        type: DataTypes.FLOAT, // Check if FLOAT is the appropriate type for your use case
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER, // Check if INTEGER is the appropriate type for your use case
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discount_percentage: {
        type: DataTypes.FLOAT, // Check if FLOAT is the appropriate type for your use case
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING, // Adjust if storing image URLs
        allowNull: false,
    },
}, {
    timestamps: false, // Disable timestamps
});
