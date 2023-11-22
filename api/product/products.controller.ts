// product.controller.ts
import { Request, Response } from 'express';
import productService from './products.service';
import { ShopProductInterface, CreateProductRequest, UpdateProductRequest ,AdminProductInterface} from './products.interface';


const getAllInventory = async (req: Request, res: Response): Promise<void> => {
    try {
        const inventory = await productService.getAllInventory();
        res.status(200).json(inventory);
    } catch (error) {
        console.error('Error fetching inventory:', error);

        res.status(500).json({ message: 'Internal server error' });
    }
};

<<<<<<< HEAD
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
=======
const getInventoryById = async (req: Request, res: Response): Promise<void> => {
    const productId = req.params.productId;
>>>>>>> f29048bcafdcb750f3f01860ba7a9932e252dccc

    try {
        const inventoryItem = await productService.getInventoryById(productId);
        if (inventoryItem) {
            res.status(200).json(inventoryItem);
        } else {
            res.status(404).json({ message: 'Inventory item not found' });

        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const addNewInventoryItem = async (req: Request, res: Response): Promise<void> => {
    const newInventoryItemData: CreateProductRequest = req.body;

    try {
        const createdInventoryItem = await productService.addNewInventoryItem(newInventoryItemData);
        res.status(201).json(createdInventoryItem);

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateInventoryItem = async (req: Request, res: Response): Promise<void> => {
    const productId = req.params.productId;
    const updatedInventoryItemData = req.body;

    try {
        const updatedInventoryItem = await productService.updateInventoryItem(productId, updatedInventoryItemData);
        if (updatedInventoryItem) {
            res.status(200).json(updatedInventoryItem);
        } else {
            res.status(404).json({ message: 'Inventory item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteInventoryItem = async (req: Request, res: Response): Promise<void> => {
    const productId = req.params.productId;

    try {
        const deletedInventoryItem = await productService.deleteInventoryItem(productId);
        if (deletedInventoryItem) {
            res.status(200).json(deletedInventoryItem);
        } else {
            res.status(404).json({ message: 'Inventory item not found' });

        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default {
<<<<<<< HEAD
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    updateProductQuantity,
    getAllProductsAdmin,
=======
    getAllInventory,
    getInventoryById,
    addNewInventoryItem,
    updateInventoryItem,
    deleteInventoryItem,
>>>>>>> f29048bcafdcb750f3f01860ba7a9932e252dccc
};
