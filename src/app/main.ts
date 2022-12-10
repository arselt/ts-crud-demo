import { faker } from '@faker-js/faker'

import { addProduct, deleteProduct, products } from "./products/product.services";

for (let index = 0; index < 2; index++) {
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    updatedAt: faker.date.recent(),
    createdAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 90 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      updatedAt: faker.date.recent(),
      createdAt: faker.date.recent(),
    }
  })
}

console.log(products);

const getFirstProductId = products[0].id

console.log("The id we want to delete: ", getFirstProductId);

deleteProduct(getFirstProductId);

console.log(products)
