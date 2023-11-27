import { Product, AdminProduct } from './products.model';
import { ShopProductInterface, AdminProductInterface, ProductCreateInput , UpdateProductRequest} from './products.interface';


const productService = {
    getAllInventory: async (): Promise<AdminProductInterface[]> => {
        const inventory = await AdminProduct.findAll({
            include: [Product],
            raw: true,
        });
        return inventory as unknown as AdminProductInterface[];
    },

    getInventoryById: async (productId: string): Promise<AdminProductInterface | null> => {
        const inventoryItem = await AdminProduct.findOne({
            where: { product_id: productId },
            include: [Product],
            raw: true,
        });

        return inventoryItem ? (inventoryItem as unknown as AdminProductInterface) : null;
    },


    addNewInventoryItem: async (
        newInventoryItemData: {
            product: ShopProductInterface;
            Admin_Products: {
                is_for_sale: boolean;
                cost_price: number;
                supplier: string;
            };
        }
    ): Promise<{ adminProduct: AdminProductInterface; product: ShopProductInterface | null }> => {
        try {
            // Create a new Product
            const createdProduct = await Product.create(newInventoryItemData.product as ProductCreateInput) as unknown as ShopProductInterface;
    
            // Create a new AdminProduct with additional properties
            const createdAdminProduct = await AdminProduct.create({
                ...newInventoryItemData.Admin_Products,
                product_id: createdProduct.product_id, // Assuming product_id is generated by the database
            });

            // Retrieve the created Product
            const retrievedProduct = await Product.findOne({
                where: { product_id: createdProduct.product_id },
            });

            return {
                adminProduct: createdAdminProduct.toJSON() as AdminProductInterface,
                product: retrievedProduct ? (retrievedProduct.toJSON() as ShopProductInterface) : null,
            };
        } catch (error) {
            console.error('Error creating new inventory item:', error);
            throw new Error('Error creating new inventory item');
        }
    },


    updateInventoryItem: async (
        productId: string,
        updatedInventoryItemData: Partial<AdminProductInterface>
    ): Promise<AdminProductInterface | null> => {
        // Find the inventory item with the given product ID
        const inventoryItem = await AdminProduct.findOne({
            where: { product_id: productId },
            include: [Product], // Include Product table in the query
        });
    
        // If the inventory item is not found, return null
        if (!inventoryItem) {
            return null;
        }
    
       // Update in AdminProduct Table
await inventoryItem.update(updatedInventoryItemData);
console.log("Update in AdminProduct successful");

// Access the associated Product instance
const associatedProduct = await (inventoryItem as any).getProduct(); // Use type casting here

// Log the associatedProduct to check if it exists
console.log("Associated Product:", associatedProduct);

// Update the associated Product instance in the Product table
if (associatedProduct) {
    await associatedProduct.update(updatedInventoryItemData as ProductCreateInput); // Type casting here as well
    console.log("Update in Product successful");
} else {
    console.log("Associated Product not found");
}
    
        // Return the updated inventory item along with the associated product data
        return inventoryItem.toJSON() as AdminProductInterface;
    },
    
    
    

    

    deleteInventoryItem: async (productId: string): Promise<{ success: boolean, message?: string }> => {
        try {
            const inventoryItem = await AdminProduct.findOne({ where: { product_id: productId } });

            if (!inventoryItem) {
                return { success: false, message: 'Inventory item not found.' };
            }

            await inventoryItem.destroy();

            return { success: true, message: 'Inventory item deleted successfully.' };
        } catch (error) {
            console.error('Error deleting inventory item:', error);
            throw new Error('Error deleting inventory item');
        }
    },

};

export default productService;
