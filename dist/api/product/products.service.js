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
    getAllInventory: () => __awaiter(void 0, void 0, void 0, function* () {
        const inventory = yield products_model_1.AdminProduct.findAll();
        return inventory.map((item) => item.toJSON());
    }),
    getInventoryById: (productId) => __awaiter(void 0, void 0, void 0, function* () {
        const inventoryItem = yield products_model_1.AdminProduct.findOne({ where: { id: productId } });
        return inventoryItem ? inventoryItem.toJSON() : null;
    }),
    addNewInventoryItem: (newInventoryItemData) => __awaiter(void 0, void 0, void 0, function* () {
        const createdInventoryItem = yield products_model_1.AdminProduct.create(newInventoryItemData);
        return createdInventoryItem.toJSON();
    }),
    updateInventoryItem: (productId, updatedInventoryItemData) => __awaiter(void 0, void 0, void 0, function* () {
        const inventoryItem = yield products_model_1.AdminProduct.findOne({ where: { id: productId } });
        if (!inventoryItem) {
            return null;
        }
        yield inventoryItem.update(updatedInventoryItemData);
        return inventoryItem.toJSON();
    }),
    deleteInventoryItem: (productId) => __awaiter(void 0, void 0, void 0, function* () {
        const inventoryItem = yield products_model_1.AdminProduct.findOne({ where: { id: productId } });
        if (!inventoryItem) {
            return null;
        }
        yield inventoryItem.destroy();
        return inventoryItem.toJSON();
    }),
};
exports.default = productService;
