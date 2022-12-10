import { Product } from "./product.model";

export const products: Product[] = []

type Id = string | number;
const getIndex = (id: Id) => products.findIndex(products => products.id === id);

export const addProduct = (data: Product) => {
  products.push(data);
}

export const deleteProduct = (id: Id) => {
  const index: number = getIndex(id)
  products.splice(index, 1)
}
