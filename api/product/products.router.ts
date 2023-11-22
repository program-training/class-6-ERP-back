import express from "express";
import { authenticateToken } from "./middleware";
import productController from "./products.controller";

const router = express.Router();


router.use(authenticateToken);


router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.patch('/:id', productController.updateProductQuantity);



export default router;