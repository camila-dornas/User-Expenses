import Expense from "../models/expenseConstructor"
import connection from "../database/connection"


export async function createExpenseModel(body: Expense){ 
  const sql = `INSERT INTO expenses SET ?;`
  const result = await connection.query(sql, body)
  return result
}

export async function  getAllExpensesByUserModel(userId: string){
  const sql = `SELECT * FROM expenses WHERE user_id=?;`
  const result = await connection.query(sql, userId)
  return result
}


export async function getExpenseByIdModel(id: string){
  const sql = `SELECT * FROM expenses WHERE id=?;`
  const result = await connection.query(sql, id)
  return result
}


export async function updateExpenseByIdModel(body: Expense, id: string){
  const sql = `UPDATE expenses SET ? WHERE id=?;`
  const result = await connection.query(sql, body, id)
  return result
}

export async function deleteExpenseByIdModel(id: string){
  const sql = `DELETE FROM expenses WHERE id=?;`
  const result = await connection.query(sql, id)
  return result
}
