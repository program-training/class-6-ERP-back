import express from "express";
import * as productsController from "./product.controler";

const router = express.Router();

router.get('/',productsController.get )


export default router;