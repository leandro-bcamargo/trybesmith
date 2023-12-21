import productModel from "../models/product.model";
import { Product } from "../types/Product";
import ServiceResponse from "../types/ServiceResponse";
import CustomError from "../utils/CustomError";

async function create(name: string, amount: string): Promise<ServiceResponse<Product>> {
  const insertId = await productModel.create(name, amount);

  if (!insertId) throw new CustomError('NOT_FOUND', "Couldn't insert product");

  const product = await productModel.getById(insertId);

  return {status: 'CREATED', data: product};
}

export default {
  create,
}