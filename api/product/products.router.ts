import express from "express";
import productController from "./products.controller";
import shopController from "../protuctOutServes/products.controller"
const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.patch('/:id', productController.updateProductQuantity);


router.get(`/shop_inventory?search={searchText}`, shopController.getAllProducts);

// Fetch a specific inventory item
router.get('/shop_inventory/:productId', shopController.getProductById);

// Update the purchased products
router.post('/shop_inventory/updateInventory', shopController.updateProductQuantity);


export default router;