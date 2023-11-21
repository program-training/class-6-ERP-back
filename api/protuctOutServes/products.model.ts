// products.model.ts
import { sequelize } from "../../utils/connections.db";
import { DataTypes, Model } from 'sequelize';
import { ShopProductInterface, AdminProductInterface } from './products.interface';

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
});

// AdminProduct Model (Extends Product Model for Admin Specific Fields)
export const AdminProduct = sequelize.define<Model<AdminProductInterface>>('admin_products', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    isForSale: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    costPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    supplier: {
        type: DataTypes.STRING,
        allowNull: false,
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
});

// Define foreign key relationship between AdminProduct and Product
AdminProduct.belongsTo(Product, { foreignKey: 'id', targetKey: 'id' });

// Synchronize the models with the database
sequelize.sync()
    .then(() => {
        console.log('Products and AdminProducts tables created successfully.');
    })
    .catch(err => {
        console.error('Error creating tables:', err);
    });
