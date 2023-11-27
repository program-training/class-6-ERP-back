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
        const inventory = yield products_model_1.AdminProduct.findAll({
            include: [products_model_1.Product],
            raw: true,
        });
        return inventory;
    }),
    getInventoryById: (productId) => __awaiter(void 0, void 0, void 0, function* () {
        const inventoryItem = yield products_model_1.AdminProduct.findOne({
            where: { product_id: productId },
            include: [products_model_1.Product],
            raw: true,
        });
        return inventoryItem ? inventoryItem : null;
    }),
    addNewInventoryItem: (newInventoryItemData) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Create a new Product
            const createdProduct = yield products_model_1.Product.create(newInventoryItemData.product);
            // Create a new AdminProduct with additional properties
            const createdAdminProduct = yield products_model_1.AdminProduct.create(Object.assign(Object.assign({}, newInventoryItemData.Admin_Products), { product_id: createdProduct.product_id }));
            // Retrieve the created Product
            const retrievedProduct = yield products_model_1.Product.findOne({
                where: { product_id: createdProduct.product_id },
            });
            return {
                adminProduct: createdAdminProduct.toJSON(),
                product: retrievedProduct ? retrievedProduct.toJSON() : null,
            };
        }
        catch (error) {
            console.error('Error creating new inventory item:', error);
            throw new Error('Error creating new inventory item');
        }
    }),
    updateInventoryItem: (productId, updatedInventoryItemData) => __awaiter(void 0, void 0, void 0, function* () {
        // Find the inventory item with the given product ID
        const inventoryItem = yield products_model_1.AdminProduct.findOne({
            where: { product_id: productId },
            include: [products_model_1.Product], // Include Product table in the query
        });
        // If the inventory item is not found, return null
        if (!inventoryItem) {
            return null;
        }
        // Update in AdminProduct Table
        yield inventoryItem.update(updatedInventoryItemData);
        console.log("Update in AdminProduct successful");
        // Access the associated Product instance
        const associatedProduct = yield inventoryItem.getProduct(); // Use type casting here
        // Log the associatedProduct to check if it exists
        console.log("Associated Product:", associatedProduct);
        // Update the associated Product instance in the Product table
        if (associatedProduct) {
            yield associatedProduct.update(updatedInventoryItemData); // Type casting here as well
            console.log("Update in Product successful");
        }
        else {
            console.log("Associated Product not found");
        }
        // Return the updated inventory item along with the associated product data
        return inventoryItem.toJSON();
    }),
    deleteInventoryItem: (productId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const inventoryItem = yield products_model_1.AdminProduct.findOne({ where: { product_id: productId } });
            if (!inventoryItem) {
                return { success: false, message: 'Inventory item not found.' };
            }
            yield inventoryItem.destroy();
            return { success: true, message: 'Inventory item deleted successfully.' };
        }
        catch (error) {
            console.error('Error deleting inventory item:', error);
            throw new Error('Error deleting inventory item');
        }
    }),
};
exports.default = productService;
