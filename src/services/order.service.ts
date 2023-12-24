import orderModel from "../models/order.model";
import { CreatedOrder, OrderWithProductsIds } from "../types/Order";
import ServiceResponse from "../types/ServiceResponse";

async function getAll(): Promise<ServiceResponse<OrderWithProductsIds[]>> {
  const orders = await orderModel.getAll();

  return { status: 'SUCCESSFUL', data: orders }
}

async function create({ userId, productsIds }: CreatedOrder): Promise<ServiceResponse<CreatedOrder>> {
  const affectedRows = await orderModel.create({ userId, productsIds });

  if (affectedRows.some(affected => affected === 0)) {
    return { status: 'GENERIC', data: { message: "Couldn't create order" } }
  }

  return { status: 'CREATED', data: { userId, productsIds } };
}

export default {
  getAll,
  create,
}