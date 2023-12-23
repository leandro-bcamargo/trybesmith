import { RowDataPacket } from "mysql2";
import connection from "./connection";
import { Order, OrderWithProductsIds } from "../types/Order";

async function getAll(): Promise<OrderWithProductsIds[]> {
  const [orders] = await connection.execute<RowDataPacket[]>(`
    SELECT ord.id AS id,
    ord.user_id AS userId,
    JSON_ARRAYAGG(prod.id) AS productsIds
    FROM Trybesmith.orders ord
    LEFT JOIN Trybesmith.products prod
    ON ord.id = prod.order_id
    GROUP BY ord.id;
  `)

  return orders as OrderWithProductsIds[];
}

export default {
  getAll,
}