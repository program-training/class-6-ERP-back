"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = __importDefault(require("./products.controller"));
<<<<<<< HEAD
const products_controller_2 = __importDefault(require("../externall_protuct/products.controller"));
=======
const products_controller_2 = __importDefault(require("../externalEndPoint/products.controller"));
>>>>>>> d7fd117050bcdaf5050d97cddf96a0342fa5159a
const router = express_1.default.Router();
// Out service products router
router.get(`/shop_inventory`, products_controller_2.default.getAllProductsOut);
router.get('/shop_inventory/:productId', products_controller_2.default.getProductById);
router.post('/shop_inventory/:productId', products_controller_2.default.updateProductQuantity);
const middleware_1 = require("./middleware");
router.use(middleware_1.authenticateToken);
//Add product 
router.post('/inventory', products_controller_1.default.addNewInventoryItem);
// Returns all inventory items
router.get('/inventory', products_controller_1.default.getAllInventory);
// Returns a specific inventory item
router.get('/inventory/:productId', products_controller_1.default.getInventoryById);
// Updates an inventory item
router.patch('/inventory/:productId', products_controller_1.default.updateInventoryItem);
// Deletes an inventory item
router.delete('/inventory/:productId', products_controller_1.default.deleteInventoryItem);
// router.use(authenticateToken);
exports.default = router;
