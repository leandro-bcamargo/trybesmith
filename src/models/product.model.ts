import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Product } from "../types/Product";
import connection from "./connection";

async function create({name, amount}: Product): Promise<ResultSetHeader> {
  const [product] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount)
    VALUES (?, ?)
  `, [name, amount]);


  return product;
}

async function getById(id: number):Promise<Product> {
  const [[product]] = await connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products WHERE ID = ? 
  `, [id]);

  return product as Product;
}

async function getAll(): Promise<Product[]> {
  const [products] = await connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products
  `);

  return products as Product[];
}

export default {
  create,
  getById,
  getAll,
}