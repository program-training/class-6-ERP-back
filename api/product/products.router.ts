import express from "express";
import { authenticateToken } from "./middleware";
import productController from "./products.controller";
import shopController from "../externall_protuct/products.controller"

const router = express.Router();

router.get(`/shop_inventory`, shopController.getAllProductsOut);
router.get('/shop_inventory/:productId', shopController.getProductById);
router.post('/shop_inventory/updateInventory/:productId', shopController.updateProductQuantity);

router.use(authenticateToken);

//Add product 
router.post('/inventory', productController.addNewInventoryItem)

// Returns all inventory items
router.get('/inventory', productController.getAllInventory);

// Returns a specific inventory item
router.get('/inventory/:productId', productController.getInventoryById);

// Updates an inventory item
router.put('/inventory/:productId', productController.updateInventoryItem);

// Deletes an inventory item
router.delete('/inventory/:productId', productController.deleteInventoryItem);




export default router;