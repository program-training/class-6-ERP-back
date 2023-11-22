<<<<<<< HEAD
import { Product } from './products.model';
import { ShopProductInterface ,AdminProductInterface} from './products.interface';

const productService = {
    getAllProducts: async (): Promise<ShopProductInterface[]> => {
        const products = await Product.findAll();
        return products.map((product) => product.toJSON() as ShopProductInterface);
    },

    getProductById: async (id: number): Promise<AdminProductInterface | null> => {
        const product = await Product.findOne({ where: { product_id: id } });
        return product ? (product.toJSON() as AdminProductInterface) : null;
    },

    createProduct: async (product: AdminProductInterface): Promise<AdminProductInterface> => {
        const createdProduct = await Product.create(product);
        return createdProduct.toJSON() as AdminProductInterface;
    },

    updateProduct: async (id: number, updatedProduct: AdminProductInterface): Promise<AdminProductInterface | null> => {
        await Product.update(updatedProduct, { where: { product_id: id } });
        const product = await Product.findOne({ where: { product_id: id } });
        return product ? (product.toJSON() as AdminProductInterface) : null;
    },

    deleteProduct: async (id: number): Promise<void> => {
        await Product.destroy({ where: { product_id: id } });
    },

    updateProductQuantity: async (id: number, operation: string): Promise<AdminProductInterface | null> => {
        const product = await Product.findOne({ where: { product_id: id } });
        if (!product) {
            return null; // Product not found
        }

        // if (operation === 'increment') {
        //     product.quantity += 1;
        // } else if (operation === 'decrement' && product.quantity > 0) {
        //     product.quantity -= 1;
        // }

        // Save the updated product
        await product.save();
        return product.toJSON() as AdminProductInterface;
=======
import { Product, AdminProduct } from './products.model';
import { ShopProductInterface, CreateProductRequest, UpdateProductRequest ,AdminProductInterface} from './products.interface';


const productService = {
    getAllInventory: async (): Promise<AdminProductInterface[]> => {
        const inventory = await AdminProduct.findAll();
        return inventory.map((item) => item.toJSON() as AdminProductInterface);
    },

    getInventoryById: async (productId: string): Promise<AdminProductInterface | null> => {
        const inventoryItem = await AdminProduct.findOne({ where: { id: productId } });
        return inventoryItem ? (inventoryItem.toJSON() as AdminProductInterface) : null;
    },

    addNewInventoryItem: async (
        newInventoryItemData: CreateProductRequest
    ): Promise<AdminProductInterface> => {
        const createdInventoryItem = await AdminProduct.create(newInventoryItemData);
        return createdInventoryItem.toJSON() as AdminProductInterface;
    },

    updateInventoryItem: async (
        productId: string,
        updatedInventoryItemData: Partial<AdminProductInterface>
    ): Promise<AdminProductInterface | null> => {
        const inventoryItem = await AdminProduct.findOne({ where: { id: productId } });

        if (!inventoryItem) {
            return null;
        }

        await inventoryItem.update(updatedInventoryItemData);

        return inventoryItem.toJSON() as AdminProductInterface;
    },

    deleteInventoryItem: async (productId: string): Promise<AdminProductInterface | null> => {
        const inventoryItem = await AdminProduct.findOne({ where: { id: productId } });

        if (!inventoryItem) {
            return null;
        }

        await inventoryItem.destroy();

        return inventoryItem.toJSON() as AdminProductInterface;
>>>>>>> f29048bcafdcb750f3f01860ba7a9932e252dccc
    },
};

export default productService;

