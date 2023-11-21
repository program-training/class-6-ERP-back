// products.model.ts
import { sequelize } from "../../utils/connections.db";
import { DataTypes, Model } from 'sequelize';
import { ShopProductInterface } from './products.interface';

// Product Model
export const Product = sequelize.define<Model<ShopProductInterface>>('products', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salePrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
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
    discountPercentage: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    image: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
},
{
    timestamps: false, // Disable timestamps
});
