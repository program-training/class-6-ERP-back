import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'your_database_host',
  port: 5432, // default PostgreSQL port
  username: 'your_database_username',
  password: 'your_database_password',
  database: 'your_database_name',
});

export default sequelize;
