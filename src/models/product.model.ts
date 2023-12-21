import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Product } from "../types/Product";
import connection from "./connection";

async function create(name: string, amount: string): Promise<number> {
  const [product] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount)
    VALUES (?, ?)
  `, [name, amount]);

  // console.log('create model:', product);

  return product.insertId;
}

async function getById(id: number):Promise<Product> {
  const [product] = await connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products WHERE ID = ? 
  `, [id]);

  return product[0] as Product;
}

export default {
  create,
  getById,
}