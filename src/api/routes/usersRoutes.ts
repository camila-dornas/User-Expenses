import { Router } from 'express';
import { getUserByIdController } from '../../app/controllers/userController';
import validateToken from '../../utils/validateToken';

const usersRouter = Router();


usersRouter.get('/users:id', validateToken, getUserByIdController)


export default usersRouter