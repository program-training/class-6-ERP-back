"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
const products_controller_1 = __importDefault(require("./products.controller"));
const router = express_1.default.Router();
router.use(middleware_1.authenticateToken);
router.get('/', products_controller_1.default.getAllProducts);
router.get('/:id', products_controller_1.default.getProductById);
router.post('/', products_controller_1.default.createProduct);
router.put('/:id', products_controller_1.default.updateProduct);
router.delete('/:id', products_controller_1.default.deleteProduct);
router.patch('/:id', products_controller_1.default.updateProductQuantity);
exports.default = router;
