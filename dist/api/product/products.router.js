"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = __importDefault(require("./products.controller"));
const router = express_1.default.Router();
// Returns all inventory items
router.get('/api/inventory', products_controller_1.default.getAllInventory);
// Returns a specific inventory item
router.get('/api/inventory/:productId', products_controller_1.default.getInventoryById);
// Adds a new inventory item
router.post('/api/inventory', products_controller_1.default.addNewInventoryItem);
// Updates an inventory item
router.put('/api/inventory/:productId', products_controller_1.default.updateInventoryItem);
// Deletes an inventory item
router.delete('/api/inventory/:productId', products_controller_1.default.deleteInventoryItem);
// router.get(`/api/shop_inventory?search={searchText}`, shopController.getAllShopInventory);
// // Fetch a specific inventory item
// router.get('/api/shop_inventory/:productId', shopController.getShopInventoryById);
// // Update the purchased products
// router.post('/api/shop_inventory/updateInventory', shopController.updateShopInventory);
// getAllProductsAdmin
// router.get('/', productController.getAllProductsAdmin);

exports.default = router;
