// product.controller.ts
import { Request, Response } from 'express';
import productService from './products.service';
// import { ShopProductInterface } from './products.interface';

// Get all products
const getAllProductsOut = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products 1:', error);
        res.status(500).json({ message: 'Internal server error 1' });
    }
};


// Get product by ID
const getProductById = async (req: Request, res: Response): Promise<void> => {
    const productId = (req.params.productId);
    
    try {
        const product = await productService.getProductById(productId);
        
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error 2' });
    }
};

// Update quantity
const updateProductQuantity = async (req: Request, res: Response): Promise<void> => {
    const productId = (req.params.productId);
    const operation = req.body.operation; // 'increment' or 'decrement'
    
    try {
        const product = await productService.updateProductQuantity(productId, operation);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error 3' });
    }
};

export default {
    getAllProductsOut,
    getProductById,
    updateProductQuantity,
};
