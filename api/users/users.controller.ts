import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as userService from './users.service';

const SECRET_KEY = 'your-secret-key';

const generateToken = (userId: string) => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.loginUserInDB(req.body);
    if (user.status === 200) {
      const token = generateToken(user.content.userId);
      res.status(user.status).json({ ...user.content, token });
    } else {
      res.status(user.status).json(user.content);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const registerUser = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsersFromDB();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
