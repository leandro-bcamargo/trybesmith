export type Order = {
  id: number,
  userId: number,
  productsIds: number[],
}

export type OrderWithProductsIds = Order & { productsIds: number[] }