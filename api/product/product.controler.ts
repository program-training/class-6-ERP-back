import { RequestHandler } from "express";
import { Product } from './products.model'
// import * as productsService from "./product.service";

export async function get() {
    try {
        const users = await Product.count()
        console.log(users);
        
     } catch (err) {
        console.log('Failed to get users');
     }
        
}