// product.interface.ts
export interface ShopProductInterface {
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

export interface AdminProductInterface extends ShopProductInterface {
    isForSale: boolean;
    costPrice: number;
    supplier: string;
}


export type CreateProductRequest = Omit<AdminProductInterface, 'id'>;
export type UpdateProductRequest = Partial<AdminProductInterface>;




















// // product.interface.ts
// import { DataTypes, Model } from 'sequelize';

// export interface ProductAttributes {
//     product_id: number;
//     name: string;
//     sale_price: number;
//     quantity: number;
//     description: string | null;
//     category: string | null;
//     discount_percentage: number | null;
//     image_url: string | null;
//     image_alt: string | null;
// }

// export interface ProductInstance extends Model<ProductAttributes>, ProductAttributes {}

// // AdminProduct interface (if needed)
// interface AdminProductAttributes {
//     product_id: number;
//     is_for_sale: boolean;
//     cost_price: number | null;
//     supplier: string | null;
// }

// export interface AdminProductInstance extends Model<AdminProductAttributes>, AdminProductAttributes {}

// // Omitting 'id' from AdminProductInterface for POST request
// export type CreateProductRequest = Omit<AdminProductAttributes, 'product_id'>;

// // Partial AdminProductInterface for PUT request
// export type UpdateProductRequest = Partial<AdminProductAttributes>;

