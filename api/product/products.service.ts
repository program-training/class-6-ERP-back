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
    },
};

export default productService;

