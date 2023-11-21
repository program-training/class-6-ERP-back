import { Product, AdminProduct } from './products.model';
import { ShopProductInterface, CreateProductRequest, UpdateProductRequest ,AdminProductInterface} from './products.interface';

const productService = {
    getAllProducts: async (): Promise<ShopProductInterface[]> => {
        const products = await Product.findAll();
        return products.map((product) => product.toJSON() as ShopProductInterface);
    },
    // getAllProductsAdmin: async (): Promise<AdminProductInterface[]> => {
    //     const products = await Product.findAll();
    //     return products.map((product) => product.toJSON() as AdminProductInterface);
    // },

    getProductById: async (id: number): Promise<ProductAttributes | null> => {
        const product = await Product.findOne({ where: { product_id: id } });
        return product ? (product.toJSON() as ProductAttributes) : null;
    },

    createProduct: async (product: ProductAttributes): Promise<ProductAttributes> => {
        const createdProduct = await Product.create(product);
        return createdProduct.toJSON() as ProductAttributes;
    },

    updateProduct: async (id: number, updatedProduct: ProductAttributes): Promise<ProductAttributes | null> => {
        await Product.update(updatedProduct, { where: { product_id: id } });
        const product = await Product.findOne({ where: { product_id: id } });
        return product ? (product.toJSON() as ProductAttributes) : null;
    },

    deleteProduct: async (id: number): Promise<void> => {
        await Product.destroy({ where: { product_id: id } });
    },

    updateProductQuantity: async (id: number, operation: string): Promise<ProductAttributes | null> => {
        const product = await Product.findOne({ where: { product_id: id } });
        if (!product) {
            return null; // Product not found
        }

        if (operation === 'increment') {
            product.quantity += 1;
        } else if (operation === 'decrement' && product.quantity > 0) {
            product.quantity -= 1;
        }

        // Save the updated product
        await product.save();
        return product.toJSON() as ProductAttributes;
    },
};

export default productService;
