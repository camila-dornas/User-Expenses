import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import  {TokenUser}  from '../validate/interfaceUser';

const keySecret = process.env.SECRET_KEY_TOKEN;

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'token not send' });
  }
  try {
    const result = jwt.verify(token, keySecret) as TokenUser;
    const { username, email } = result.payload;
    req.body = {
      ...req.body,
      username,
      email,
    };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'invalid token' });
  }
};

export default validateToken;