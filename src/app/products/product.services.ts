import { Product } from "./product.model"; // Import the Product interface
import { CreateProductDto } from "./product.dto"; // Import the CreateProductDto data transfer object
import { faker } from "@faker-js/faker";

// Create an empty array of products
export const products: Product[] = []

// Define the Id type as a string or number
type Id = string | number;

// Define a function that returns the index of the product with the given ID in the array of products
const getIndex = (id: Id) => products.findIndex(products => products.id === id);

// 1. Create a new product object with the faker.js library
export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  // Add the new product to the list of products
  products.push(newProduct);
  // Return the newly created product
  return newProduct
}

// 2. Read a product by searching for it's Id and returning console log
export const viewProduct = (id: Id) => {
  const index: number = getIndex(id)
  console.log(products[index])
}

// 3. Updates the properties of a product with the given ID.
export const updateProduct = (id: Id, changes: object) => {
  const index: number = getIndex(id)
  const product: Product = products[index] // Get the product at the given index by the Id

  // Update the product with the provided changes
  products[index] = {
    ...product,
    ...changes
  }
  // Return the updated product
  return products[index]
}

// Deletes a product with the given ID.
export const deleteProduct = (id: Id) => {
  const index: number = getIndex(id)
  products.splice(index, 1) //split from the index to a count of one (just the index)
}

