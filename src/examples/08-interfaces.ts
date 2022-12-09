type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = []

products.push({
  id: '01',
  title: 'Product 1',
  createdAt: new Date(),
  stock: 90,
  size: 'M',
})

// Types can't be extended thats why
// we use Interfaces more often

interface ProductInterface {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const addProduct = (data: ProductInterface) => {
  products.push(data);
}
