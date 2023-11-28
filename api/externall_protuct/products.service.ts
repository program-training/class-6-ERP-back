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

  updateProductQuantity: async (id: string, operation: number ): Promise<ShopProductInterface | null | string> => {
    const product = await Product.findOne({ where: { product_id:id } }); // Assuming 'id' is the correct property
    if (!product) {
      return "no product id"; // Product not found “no product id” | “not enough in stock”
    }
    
    if (product.quantity >= operation) {
      product.quantity -= operation;
    } else  {
      return "not enough in stock"
    }

    // Save the updated product
    await product.save();
    return product.toJSON() as ShopProductInterface;
  },
};

export default productService;

