import { Product } from "./product.model"

// Define an interface for the data required to create a new product that will be automaticly generated
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    categoryId: string;
}
