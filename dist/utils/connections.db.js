"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeOptionsForTest = exports.connectToDatabase = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("pg");
const connectToDatabaseString = process.env.CONNECTION_STRING_DB;
// Set the maximum number of connections in the pool (adjust as needed)
const maxPoolSize = 10;
// Parse the connection string
const { username, password, host, port, database } = new pg_1.Client({ connectionString: connectToDatabaseString }).parseConnectionString();
// Create Sequelize options with connection pooling
const sequelizeOptions = {
    dialect: 'postgres',
    host,
    port: Number(port),
    database,
    username,
    password,
    pool: {
        max: maxPoolSize,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
exports.sequelize = new sequelize_1.Sequelize(sequelizeOptions);
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Test the connection and synchronize models (if needed)
            yield exports.sequelize.authenticate();
            console.log('Connection has been established successfully.');
            // Synchronize models with the database (if needed)
            // await sequelize.sync();
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
exports.connectToDatabase = connectToDatabase;
// Export sequelize options for testing purposes
exports.sequelizeOptionsForTest = sequelizeOptions;
