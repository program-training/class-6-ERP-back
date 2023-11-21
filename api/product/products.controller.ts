// product.controller.ts
import { Request, Response } from 'express';
import productService from './products.service';

// Get all products
const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('Request received to get all products');
        const products = await productService.getAllProducts();
        console.log('Retrieved products:', products);
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getAllProductsAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('Request received to get all products');
        const products = await productService.getAllProducts();
        console.log('Retrieved products:', products);
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get product by ID
const getProductById = async (req: Request, res: Response): Promise<void> => {
     const productId = parseInt(req.params.id, 10);
    try {
        const product = await productService.getProductById(productId);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create new product
const createProduct = async (req: Request, res: Response): Promise<void> => {
    const newProductData: CreateProductRequest = req.body;
    try {
        const product = await productService.createProduct(newProductData);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update product
const updateProduct = async (req: Request, res: Response): Promise<void> => {
        const productId = parseInt(req.params.id, 10);
    const updatedProductData: UpdateProductRequest = req.body;
    try {
        const product = await productService.updateProduct(productId, updatedProductData);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete product
const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    const productId = parseInt(req.params.id, 10);
    try {
        await productService.deleteProduct(productId);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update quantity
const updateProductQuantity = async (req: Request, res: Response): Promise<void> => {
    const productId = parseInt(req.params.id, 10);
    const operation = req.body.operation; // 'increment' or 'decrement'
    try {
        const product = await productService.updateProductQuantity(productId, operation);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    updateProductQuantity,
    getAllProductsAdmin,
};
