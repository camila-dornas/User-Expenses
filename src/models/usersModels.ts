import connection from "../../database/connection"

export async function getUserByIdModel(id: string){
  const sql = `SELECT * FROM users WHERE id=?;`
  const result = await connection.query(sql, id)
  return result
}