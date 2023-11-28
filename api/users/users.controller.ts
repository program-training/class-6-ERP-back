import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as userService from './users.service';

const secretKey = process.env.SECRET_KEY

const generateToken = (userId: string) => {
  return jwt.sign({ userId }, secretKey!, { expiresIn: '3h' });
};

export const loginUser = async (req: Request, res: Response) => {  
  try {
    const user = await userService.loginUser(req.body);
    if (user){
      const token = generateToken(secretKey!);
      res.status(user.status).json({ token });
    } else {
      res.json(' is not logged in');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const registerUser = async (req: Request, res: Response) => {
  try {
      const userCreationResult = await userService.registerUser(req.body);

      if (userCreationResult.status === 201) {
          res.status(userCreationResult.status).json({ user: userCreationResult.user, message: 'User created successfully' });
      } else {
          res.status(userCreationResult.status).json({ message: userCreationResult.message });
      }
  } catch (error) {
      console.error('An error occurred while processing the request:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};