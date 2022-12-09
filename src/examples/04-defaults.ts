export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 0
) => {
  return {
    id,
    stock: stock,
    isNew: isNew
  }
}

const Product1 = createProduct("1sqw12", true, 12)
console.log(Product1)

const Product2 = createProduct("1sqxu37", false, 1)
console.log(Product2)

const Product3 = createProduct("23xu7as", true)
console.log(Product3)
