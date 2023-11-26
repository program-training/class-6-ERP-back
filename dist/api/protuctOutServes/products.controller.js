"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_service_1 = __importDefault(require("./products.service"));
// import { ShopProductInterface } from './products.interface';
// Get all products
const getAllProductsOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_service_1.default.getAllProducts();
        res.status(200).json(products);
    }
    catch (error) {
        console.error('Error fetching products 1:', error);
        res.status(500).json({ message: 'Internal server error 1' });
    }
});
// Get product by ID
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = (req.params.productId);
    try {
        const product = yield products_service_1.default.getProductById(productId);
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error 2' });
    }
});
// Update quantity
const updateProductQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = (req.params.productId);
    const operation = req.body.operation; // 'increment' or 'decrement'
    try {
        const product = yield products_service_1.default.updateProductQuantity(productId, operation);
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error 3' });
    }
});
exports.default = {
    getAllProductsOut,
    getProductById,
    updateProductQuantity,
};
