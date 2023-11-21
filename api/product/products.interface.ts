// product.interface.ts
export interface ShopProductInterface {
    id?: string;

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

export interface AdminProductInterface extends ShopProductInterface {

    isForSale: boolean;
    costPrice: number;
    supplier: string;
}


export type CreateProductRequest = Omit<AdminProductInterface, 'id'>;
export type UpdateProductRequest = Partial<AdminProductInterface>;

















