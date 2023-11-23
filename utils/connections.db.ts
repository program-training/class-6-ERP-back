import { Sequelize, Dialect } from 'sequelize';
import { Client } from 'pg';

const connectToDatabaseString: string | undefined = process.env.CONNECTION_STRING_DB;

// Set the maximum number of connections in the pool (adjust as needed)
const maxPoolSize = 10;

// Parse the connection string
const { username, password, host, port, database } = new Client({ connectionString: connectToDatabaseString as string }).parseConnectionString();

// Create Sequelize options with connection pooling
const sequelizeOptions = {
  dialect: 'postgres' as Dialect,
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

export const sequelize = new Sequelize(sequelizeOptions);

export async function connectToDatabase() {
  try {
    // Test the connection and synchronize models (if needed)
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Synchronize models with the database (if needed)
    // await sequelize.sync();

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Export sequelize options for testing purposes
export const sequelizeOptionsForTest = sequelizeOptions;
