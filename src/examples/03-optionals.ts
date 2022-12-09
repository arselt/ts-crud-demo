export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 0,
    isNew: isNew ?? true
    // isNew: isNew || true Logical OR detect flasy values, not nullish as ??
  }
}

const Product1 = createProduct("1sqw12", true, 12)
console.log(Product1)

const Product2 = createProduct("1sqxu37", false, 1)
console.log(Product2)

const Product3 = createProduct("23xu7as", true)
console.log(Product3)
