import newExpenseEmail from "../utils/expenseEmail";
import schemaExpense from "../validate/expensesValidate";
import { createExpenseModel, deleteExpenseByIdModel, getAllExpensesByUserModel, getExpenseByIdModel, updateExpenseByIdModel } from "../app/models/expenseModels";
import Expense from "../validate/interfaceExpense";
import { getUserByIdModel } from "../app/models/usersModels";


export async function createExpenseController (req: Request, res: Response) {
  try {
    schemaExpense.validate(req.body)
    const newExpense = new Expense(req.body)
    const result = await createExpenseModel(newExpense)
    const userEmail = await getUserByIdModel(newExpense.User_id)
    await newExpenseEmail(userEmail, newExpense)
    return res.status(200).json({ data: { ...result} });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

export async function getAllExpensesByUserController(req: Request, res: Response){
  try {
    schemaExpense.validate(req.body)
    const newExpense = new Expense(req.body)
    const result = await getAllExpensesByUserModel(newExpense.User_id)
    return res.status(200).json({ data: { ...result} });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

export async function getExpenseByIdController(req: Request, res: Response){
  try {
    const {id} = req.params
    const result = await getExpenseByIdModel(id)
    return res.status(200).json({ data: { ...result} });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

export async function updateExpenseByIdController(req: Request, res: Response) {
  try {
    const {id} = req.params
    schemaExpense.validate(req.body)
    const newExpense = new Expense(req.body)
    const result = await updateExpenseByIdModel(newExpense, id)
    return res.status(200).json({ data: { ...result} });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

export async function deleteExpenseByIdController(req: Request, res: Response) {
  try {
    const {id} = req.params
    const result = await deleteExpenseByIdModel(id)
    return res.status(200).json({ data: { ...result} });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}


