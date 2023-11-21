"use strict";
// import { DataTypes, Model, UUIDV4 } from 'sequelize';
// import sequelize from './sequelize.config';
// import { ShopProductInterface } from "./interface.products"
// class ShopProductModel extends Model implements ShopProductInterface {
//   public id!: string;
//   public name!: string;
//   public salePrice!: number;
//   public quantity!: number;
//   public description!: string;
//   public category!: string;
//   public discountPercentage!: number;
//   public image!: { url: string; alt: string };
// }
// ShopProductModel.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: UUIDV4,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     salePrice: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     category: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     discountPercentage: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     image: {
//       type: DataTypes.JSONB,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'ShopProduct',
//   }
// );
// class AdminProductModel extends Model {
//   public isForSale!: boolean;
//   public costPrice!: number;
//   public supplier!: string;
//   // Include fields from ShopProductModel
//   public readonly ShopProduct!: ShopProductModel;
//   // Other methods or class members can be added here if needed
// }
// AdminProductModel.init(
//   {
//     isForSale: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//     costPrice: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     supplier: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'AdminProduct',
//   }
// );
// // Establish association between AdminProductModel and ShopProductModel
// AdminProductModel.belongsTo(ShopProductModel, { foreignKey: 'id', targetKey: 'id' });
// export { ShopProductModel, AdminProductModel };
