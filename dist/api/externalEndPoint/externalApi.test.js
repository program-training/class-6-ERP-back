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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const globals_1 = require("@jest/globals");
const connections_db_1 = require("../../utils/connections.db");
const products_service_1 = __importDefault(require("./products.service"));
(0, globals_1.describe)("Connection", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield connections_db_1.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }));
    (0, globals_1.test)("the quantity will be decremented", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = '87';
        const amount = 4;
        const toUpdateProduct = yield products_service_1.default.getProductById(id);
        if (!toUpdateProduct) {
            throw new Error(`Product with ID ${id} not found`);
        }
        if (toUpdateProduct.quantity < amount) {
            throw new Error('Insufficient quantity to decrement');
        }
        yield products_service_1.default.updateProductQuantity(id, amount);
        const updatedProduct = yield products_service_1.default.getProductById(id);
        (0, globals_1.expect)(updatedProduct.quantity).toBe(toUpdateProduct.quantity - amount);
    }));
    (0, globals_1.test)('getAllProducts', () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield products_service_1.default.getAllProducts();
        (0, globals_1.expect)(Array.isArray(products)).toBe(true);
    }));
    (0, globals_1.test)('get product by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield products_service_1.default.getProductById('89');
        (0, globals_1.expect)(product).toBe(product);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connections_db_1.sequelize.close();
    }));
});
