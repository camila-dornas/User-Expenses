import { Router } from 'express';
import { createExpenseController, deleteExpenseByIdController, getAllExpensesByUserController, getExpenseByIdController, updateExpenseByIdController } from '../../app/controllers/expenseController';
import validateToken from '../../utils/validateToken';

const expenseRouter = Router();

expenseRouter.get('/', validateToken, getAllExpensesByUserController)
expenseRouter.get('/expenses:id', validateToken, getExpenseByIdController)
expenseRouter.post('/expenses', validateToken, createExpenseController)
expenseRouter.put('/expenses:id', validateToken, updateExpenseByIdController)
expenseRouter.delete('/expense:id', validateToken, deleteExpenseByIdController)

export default expenseRouter