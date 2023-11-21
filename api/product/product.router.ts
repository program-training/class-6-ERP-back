import express from "express";
import productController from "./product.controller";

const router = express.Router();

// Returns all inventory items
router.get('/api/inventory', productController.getAllInventory);

// Returns a specific inventory item
router.get('/api/inventory/:productId', productController.getInventoryById);

// Adds a new inventory item
router.post('/api/inventory', productController.addNewInventoryItem);

// Updates an inventory item
router.put('/api/inventory/:productId', productController.updateInventoryItem);

// Deletes an inventory item
router.delete('/api/inventory/:productId', productController.deleteInventoryItem);





export default router;