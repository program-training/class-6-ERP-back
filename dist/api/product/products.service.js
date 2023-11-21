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
const products_model_1 = require("./products.model");
const productService = {
    getAllProducts: () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield products_model_1.Product.findAll();
        return products.map((product) => product.toJSON());
    }),
    getProductById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield products_model_1.Product.findOne({ where: { product_id: id } });
        return product ? product.toJSON() : null;
    }),
    createProduct: (product) => __awaiter(void 0, void 0, void 0, function* () {
        const createdProduct = yield products_model_1.Product.create(product);
        return createdProduct.toJSON();
    }),
    updateProduct: (id, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
        yield products_model_1.Product.update(updatedProduct, { where: { product_id: id } });
        const product = yield products_model_1.Product.findOne({ where: { product_id: id } });
        return product ? product.toJSON() : null;
    }),
    deleteProduct: (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield products_model_1.Product.destroy({ where: { product_id: id } });
    }),
    updateProductQuantity: (id, operation) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield products_model_1.Product.findOne({ where: { product_id: id } });
        if (!product) {
            return null; // Product not found
        }
        // if (operation === 'increment') {
        //     product.quantity += 1;
        // } else if (operation === 'decrement' && product.quantity > 0) {
        //     product.quantity -= 1;
        // }
        // Save the updated product
        yield product.save();
        return product.toJSON();
    }),
};
exports.default = productService;
