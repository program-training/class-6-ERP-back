import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.CONNECTION_STRING_DB) // Example for postgres



export async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



