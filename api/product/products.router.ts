import express from "express";
import productController from "./products.controller";
import shopController from "../externalEndPoint/products.controller"

const router = express.Router();

// Out service products router
router.get(`/shop_inventory`, shopController.getAllProductsOut);
router.get('/shop_inventory/:productId', shopController.getProductById);
router.post('/shop_inventory/:productId', shopController.updateProductQuantity);


import { authenticateToken } from "./middleware";

router.use(authenticateToken);

//Add product 
router.post('/inventory', productController.addNewInventoryItem)

// Returns all inventory items
router.get('/inventory', productController.getAllInventory);

// Returns a specific inventory item
router.get('/inventory/:productId', productController.getInventoryById);

// Updates an inventory item
router.patch('/inventory/:productId', productController.updateInventoryItem);

// Deletes an inventory item
router.delete('/inventory/:productId', productController.deleteInventoryItem);

// router.use(authenticateToken);


export default router;