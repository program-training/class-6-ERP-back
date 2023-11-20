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
  
  interface AdminProductInterface extends ShopProductInterface {
    isForSale: boolean;
    costPrice: number;
    supplier: string;
  }
//   users interface
export interface User {
    userId: string;
    userName: string;
    password: string;
  }
  
  
  interface ProductService {
    getShopProducts(): Promise<ShopProductInterface[]>;
    getAdminProducts(): Promise<AdminProductInterface[]>;
    // getProductById(id: string): Promise<ProductResponseDTO | null>;
    // createProduct(productData: ProductCreateUpdateDTO): Promise<ProductResponseDTO>;
    // updateProduct(id: string, productData: ProductCreateUpdateDTO): Promise<ProductResponseDTO | null>;
    deleteProduct(id: string): Promise<void>;
  }


//   interface ProductCreateUpdateDTO {
//     name: string;
//     salePrice: number;
//     quantity: number;
//     description: string;
//     category: string;
//     discountPercentage: number;
//     image: {
//       url: string;
//       alt: string;
//     };
//     isForSale: boolean;
//     costPrice: number;
//     supplier: string;
//   }
  
//   interface ProductResponseDTO extends AdminProductInterface {
//     // Additional fields that you may want to include in the response
//   }

