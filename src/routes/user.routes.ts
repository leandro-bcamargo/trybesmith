import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/users', userController.create);

export default userRouter;