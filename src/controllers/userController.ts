import { getUserByIdModel } from "../models/usersModels"

export async function getUserByIdController(req: Request, res: Response){
  const {id} = req.params
  const result = await getUserByIdModel(id)
  res.status(200).json({ data: { ...result} })
}