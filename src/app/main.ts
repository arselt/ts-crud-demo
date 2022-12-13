import { faker } from '@faker-js/faker'

import { addProduct, deleteProduct, products, updateProduct, viewProduct } from "./products/product.services";

for (let index = 0; index < 3; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    stock: faker.datatype.number({ min: 10, max: 90 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    categoryId: faker.datatype.uuid()
  })
}

console.log(products);

const getFirstProductId = products[0].id
const getSecondProductId = products[1].id
const getThirdProductId = products[2].id

console.log("The id we want to delete: ", getFirstProductId);

console.log("The product ID I want to display: ", getSecondProductId);

console.log("The product I want to display: ");
viewProduct(getSecondProductId);

console.log("The product ID I want to update: ", getThirdProductId);
updateProduct(getThirdProductId, {
  title: faker.commerce.productName(),
});

deleteProduct(getFirstProductId);

console.log(products)
