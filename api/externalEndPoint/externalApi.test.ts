import dotenv from 'dotenv';
dotenv.config();
import { describe, expect, test, } from '@jest/globals';
import { sequelize } from '../../utils/connections.db';
import productService from './products.service';
import { ShopProductInterface } from './products.interface';


describe("Connection", () => {
  beforeAll(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });

  test("the quantity will be decremented", async () => {
    const id = '87';
    const amount = 4;

    const toUpdateProduct = await productService.getProductById(id);

    if (!toUpdateProduct) {
      throw new Error(`Product with ID ${id} not found`);
    }

    if (toUpdateProduct.quantity < amount) {
      throw new Error('Insufficient quantity to decrement');
    }

    await productService.updateProductQuantity(id, amount);

    const updatedProduct = await productService.getProductById(id);

    expect(updatedProduct!.quantity).toBe(toUpdateProduct.quantity - amount);
  });

  test('getAllProducts', async() => {
    const products = await productService.getAllProducts();

    expect(Array.isArray(products)).toBe(true)
  })

  test('get product by id', async() => {
    const product = await productService.getProductById('89')

    expect(product).toBe(product as ShopProductInterface)
  })

  afterAll(async () => {
    await sequelize.close();
  });
});
