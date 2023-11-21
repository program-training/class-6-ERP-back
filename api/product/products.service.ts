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
    },
};

export default productService;
