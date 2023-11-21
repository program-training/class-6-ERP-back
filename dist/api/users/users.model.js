"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUser = void 0;
const sequelize_1 = require("sequelize");
const connections_db_1 = require("../../utils/connections.db");
exports.AdminUser = connections_db_1.sequelize.define('admin_users', {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
}, {
    timestamps: false, // Set timestamps to false to exclude createdAt and updatedAt
});
// // user.model.ts
// import { DataTypes, Model } from 'sequelize';
// import sequelize from '../path/to/sequelize.config'; // Adjust the path accordingly
// import { User } from './user.interface';
// class UserModel extends Model implements User {
//   public userId!: string;
//   public userName!: string;
//   public password!: string;
//   // Other methods or class members can be added here if needed
// }
// UserModel.init(
//   {
//     userId: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//     },
//     userName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'User',
//     tableName: 'users', // Set the table name if it's different from the model name
//   }
// );
// export default UserModel;
