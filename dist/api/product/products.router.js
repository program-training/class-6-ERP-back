"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
const products_controller_1 = __importDefault(require("../protuctOutServes/products.controller"));
const router = express_1.default.Router();
router.get(`/shop_inventory`, products_controller_1.default.getAllProductsOut);
router.get('/shop_inventory/:productId', products_controller_1.default.getProductById);
router.post('/shop_inventory/updateInventory/:productId', products_controller_1.default.updateProductQuantity);
router.use(middleware_1.authenticateToken);
// // Returns all inventory items
// router.get('/api/inventory', productController.getAllInventory);
// // Returns a specific inventory item
// router.get('/api/inventory/:productId', productController.getInventoryById);
// // Adds a new inventory item
// router.post('/api/inventory', productController.addNewInventoryItem);
// // Updates an inventory item
// router.put('/api/inventory/:productId', productController.updateInventoryItem);
// // Deletes an inventory item
// router.delete('/api/inventory/:productId', productController.deleteInventoryItem);
exports.default = router;
