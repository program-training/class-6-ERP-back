import { describe, expect, test } from '@jest/globals';
import { app } from '../../app';
import request from 'supertest';
import { sequelize } from '../../utils/connections.db';

describe('API routes', () => {

  beforeAll(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      throw error;
    }
  });

  const userData = {
    email: 'johndoe@example.com',
    password: 'T4estpassword',
  };

  test('POST /api/users/register', async () => {
    const response = await request(app).post('localhost:8200/api/users/register').send(userData);
    expect(response.status).toBe(201); 

    expect(response.body.message).toBe('User created successfully');
  });
});