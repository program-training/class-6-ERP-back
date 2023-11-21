"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: 'your_database_host',
    port: 5432,
    username: 'your_database_username',
    password: 'your_database_password',
    database: 'your_database_name',
});
exports.default = sequelize;
