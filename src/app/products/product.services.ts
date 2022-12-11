import { Product } from "./product.model";

export const products: Product[] = []

//function gets the Index on the array of products of the given ID in id
type Id = string | number;
const getIndex = (id: Id) => products.findIndex(products => products.id === id);

export const addProduct = (data: Product) => {
  products.push(data);
}

export const viewProduct = (id: Id) => {
  const index: number = getIndex(id)
  console.log(products[index])
}

export const updateProduct = (id: Id, changes: object) => {
  const index: number = getIndex(id)
  const product: Product = products[index]

  products[index] = {
    ...product,
    ...changes
  }
  return products[index]
}

export const deleteProduct = (id: Id) => {
  const index: number = getIndex(id)
  products.splice(index, 1)
}

