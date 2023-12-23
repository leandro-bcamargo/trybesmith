import { ResultSetHeader, RowDataPacket } from "mysql2";
import connection from "./connection";
import { User } from "../types/User";

async function create({username, vocation, level, password}: User) {
  const [user] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users 
    (username, vocation, level, password)
    VALUES (?, ?, ?, ?)
  `, [username, vocation, level, password]);
  
  return user;
}

async function getById(id: number): Promise<User> {
  const [[user]] = await connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.users
    WHERE id = ?
  `, [id]);

  return user as User;
}

export default {
  create,
  getById,
}