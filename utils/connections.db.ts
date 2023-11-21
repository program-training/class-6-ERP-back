import { Sequelize } from 'sequelize';

// const connectToDatabaseString: string | undefined = process.env.CONNECTION_STRING_DB

export const sequelize = new Sequelize("postgres://hfqxkawb:bypOr7eSKuoFtbECdrKcQOLNNNMfzHqj@cornelius.db.elephantsql.com/hfqxkawb") // Example for postgres


export async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



