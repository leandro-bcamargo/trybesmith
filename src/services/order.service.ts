import orderModel from "../models/order.model";
import { OrderWithProductsIds } from "../types/Order";
import ServiceResponse from "../types/ServiceResponse";

async function getAll(): Promise<ServiceResponse<OrderWithProductsIds[]>> {
  const orders = await orderModel.getAll();

  return { status: 'SUCCESSFUL', data: orders }
}

export default {
  getAll,
}