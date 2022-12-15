import { Product } from "./product.model"

// Define an interface for the data required to create a new product that will be automaticly generated
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Define an interface for updating products without entering all required types but omiting immutable ones
export interface UpdateProductDto extends Partial<CreateProductDto> { }

// Define an interface for searching products with no possibility of Modifying the data
export interface FindProductDto extends Readonly<Partial<Product>> { }
