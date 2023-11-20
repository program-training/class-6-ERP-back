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
