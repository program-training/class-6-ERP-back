import express from "express";
import { authenticateToken } from "./middleware";
import productController from "./products.controller";
import shopController from "../protuctOutServes/products.controller"

const router = express.Router();

router.get(`/shop_inventory`, shopController.getAllProductsOut);
router.get('/shop_inventory/:productId', shopController.getProductById);
router.post('/shop_inventory/updateInventory/:productId', shopController.updateProductQuantity);




// Returns all inventory items
router.get('/inventory', productController.getAllInventory);
// Returns a specific inventory item
router.get('/inventory/:productId', productController.getInventoryById);
// Adds a new inventory item
router.post('/inventory', productController.addNewInventoryItem);
// Updates an inventory item
router.patch('/inventory/:productId', productController.updateInventoryItem);

// Deletes an inventory item
router.delete('/inventory/:productId', productController.deleteInventoryItem);

// router.use(authenticateToken);



export default router;