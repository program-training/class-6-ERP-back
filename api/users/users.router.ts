import express from "express";
import * as usersController from "./users.controler";

const router = express.Router();

router.post('/register', usersController.registerUser);

router.post('/login', usersController.loginUser);

export default router;