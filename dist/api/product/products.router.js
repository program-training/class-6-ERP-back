"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
const products_controller_1 = __importDefault(require("./products.controller"));
const products_controller_2 = __importDefault(require("../protuctOutServes/products.controller"));
const router = express_1.default.Router();
router.get(`/shop_inventory`, products_controller_2.default.getAllProductsOut);
router.get('/shop_inventory/:productId', products_controller_2.default.getProductById);
router.post('/shop_inventory/updateInventory/:productId', products_controller_2.default.updateProductQuantity);
// Returns all inventory items
router.get('/inventory', products_controller_1.default.getAllInventory);
// Returns a specific inventory item
router.get('/inventory/:productId', products_controller_1.default.getInventoryById);
// Adds a new inventory item
router.post('/inventory', products_controller_1.default.addNewInventoryItem);
// Updates an inventory item
router.put('/inventory/:productId', products_controller_1.default.updateInventoryItem);
// Deletes an inventory item
router.delete('/inventory/:productId', products_controller_1.default.deleteInventoryItem);
router.use(middleware_1.authenticateToken);
exports.default = router;
