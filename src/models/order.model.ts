import { ResultSetHeader, RowDataPacket } from "mysql2";
import connection from "./connection";
import { CreatedOrder, OrderWithProductsIds } from "../types/Order";

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

async function create({ userId, productsIds }: CreatedOrder) {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.orders ( user_id) VALUES (?)
  `, [userId]);

  const updatePromises = productsIds.map(productId => {
    return connection.execute<ResultSetHeader>(`
      UPDATE Trybesmith.products 
      SET order_id = ?
      WHERE id = ? 
    `, [insertId, productId])
  })

  const updates = await Promise.all(updatePromises);

  const affectedRows = updates.map(([header]) => header.affectedRows);

  return affectedRows;
}

export default {
  getAll,
  create,
}