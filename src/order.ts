import type { Product } from "./types";

export function calculateTotal(products: Product[]): number {
  const total = products.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  console.log(`Total: ${total}`);

  return total;
}
