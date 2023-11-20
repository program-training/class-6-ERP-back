// product.interfaces.ts
interface ShopProductInterface {
    id: string;
    name: string;
    salePrice: number;
    quantity: number;
    description: string;
    category: string;
    discountPercentage: number;
    image: {
        url: string;
        alt: string;
    };
}

interface AdminProductInterface extends ShopProductInterface {
    isForSale: boolean;
    costPrice: number;
    supplier: string;
}

// Omitting 'id' from AdminProductInterface for POST request
type CreateProductRequest = Omit<AdminProductInterface, 'id'>;

// Partial AdminProductInterface for PUT request
type UpdateProductRequest = Partial<AdminProductInterface>;
