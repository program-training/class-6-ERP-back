"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = __importDefault(require("./products.controller"));
const products_controller_2 = __importDefault(require("../protuctOutServes/products.controller"));
const router = express_1.default.Router();
router.get('/', products_controller_1.default.getAllProducts);
router.get('/:id', products_controller_1.default.getProductById);
router.post('/', products_controller_1.default.createProduct);
router.put('/:id', products_controller_1.default.updateProduct);
router.delete('/:id', products_controller_1.default.deleteProduct);
router.patch('/:id', products_controller_1.default.updateProductQuantity);
router.get(`/shop_inventory?search={searchText}`, products_controller_2.default.getAllProducts);
// Fetch a specific inventory item
router.get('/shop_inventory/:productId', products_controller_2.default.getProductById);
// Update the purchased products
router.post('/shop_inventory/updateInventory', products_controller_2.default.updateProductQuantity);
exports.default = router;
