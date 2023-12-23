import { productModel } from "../models";
import { Product } from "../types/Product";
import ServiceResponse from "../types/ServiceResponse";
import CustomError from "../utils/CustomError";

async function create({ name, amount }: Product): Promise<ServiceResponse<Product>> {
  const { insertId } = await productModel.create({ name, amount });

  if (!insertId) throw new CustomError('INVALID_DATA', "Couldn't insert product");

  const product = await productModel.getById(insertId);

  return { status: 'CREATED', data: product };
}

async function getAll(): Promise<ServiceResponse<Product[]>> {
  const products = await productModel.getAll();

  return { status: 'SUCCESSFUL', data: products }
}

export default {
  create,
  getAll,
}