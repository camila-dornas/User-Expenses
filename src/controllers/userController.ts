import { getUserByIdModel } from "../models/usersModels"
import { Response, Request } from 'express';

export async function getUserByIdController(req: Request, res: Response){
  const {id} = req.params
  const result = await getUserByIdModel(id)
  res.status(200).json({ data: { ...result} })
}