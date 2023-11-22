<<<<<<< HEAD
// product.interfaces.ts
interface ShopProductInterface {
    id: string;
=======
// product.interface.ts
export interface ShopProductInterface {
    id?: string;

>>>>>>> f29048bcafdcb750f3f01860ba7a9932e252dccc
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

<<<<<<< HEAD
interface AdminProductInterface extends ShopProductInterface {
=======
export interface AdminProductInterface extends ShopProductInterface {

>>>>>>> f29048bcafdcb750f3f01860ba7a9932e252dccc
    isForSale: boolean;
    costPrice: number;
    supplier: string;
}

<<<<<<< HEAD
// Omitting 'id' from AdminProductInterface for POST request
type CreateProductRequest = Omit<AdminProductInterface, 'id'>;

// Partial AdminProductInterface for PUT request
type UpdateProductRequest = Partial<AdminProductInterface>;
=======

export type CreateProductRequest = Omit<AdminProductInterface, 'id'>;
export type UpdateProductRequest = Partial<AdminProductInterface>;

















>>>>>>> f29048bcafdcb750f3f01860ba7a9932e252dccc
