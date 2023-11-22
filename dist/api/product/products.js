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
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("./product.model");
const productService = {
    getAllProducts: () => __awaiter(void 0, void 0, void 0, function* () { return product_model_1.ProductModel.find({}); }),
    getProductById: (id) => __awaiter(void 0, void 0, void 0, function* () { return product_model_1.ProductModel.findOne({ id }); }),
    createProduct: (product) => __awaiter(void 0, void 0, void 0, function* () { return product_model_1.ProductModel.create(product); }),
    updateProduct: (id, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () { return product_model_1.ProductModel.findOneAndUpdate({ id }, updatedProduct, { new: true }); }),
    deleteProduct: (id) => __awaiter(void 0, void 0, void 0, function* () { return product_model_1.ProductModel.findOneAndDelete({ id }); }),
    updateProductQuantity: (id, operation) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield product_model_1.ProductModel.findOne({ id });
        if (!product) {
            return null; // Product not found
        }
        if (operation === 'increment') {
            product.quantity += 1;
        }
        else if (operation === 'decrement') {
            if (product.quantity > 0) {
                product.quantity -= 1;
            }
        }
        // Save the updated product
        return product.save();
    }),
};
exports.default = productService;
