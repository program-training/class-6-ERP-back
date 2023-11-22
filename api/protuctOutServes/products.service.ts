import { Product } from './products.model';
import { ShopProductInterface } from './products.interface';

const productService = {
  getAllProducts: async (): Promise<ShopProductInterface[]> => {
    const products = await Product.findAll();
    return products.map((product) => product.toJSON() as ShopProductInterface);
      },

  getProductById: async (id: string): Promise<ShopProductInterface | null> => {
    const product = await Product.findOne({ where: { product_id : id } }); // Assuming 'id' is the correct property
    return product ? (product.toJSON() as ShopProductInterface) : null;
  },

  updateProductQuantity: async (id: string, operation: string): Promise<ShopProductInterface | null> => {
    const product = await Product.findOne({ where: { product_id:id } }); // Assuming 'id' is the correct property
    if (!product) {
      return null; // Product not found
    }
    console.log(operation);
    
    if (operation === 'increment') {
      product.quantity += 1;
    } else if (operation === 'decrement' && product.quantity > 0) {
      product.quantity -= 1;
    }

    // Save the updated product
    await product.save();
    return product.toJSON() as ShopProductInterface;
  },
};

export default productService;
