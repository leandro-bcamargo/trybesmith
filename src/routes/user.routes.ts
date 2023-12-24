import { Router } from 'express';
import userController from '../controllers/user.controller';
import createUserMiddleware from '../middlewares/createUser.middleware';

const userRouter = Router();

userRouter.post('/users', createUserMiddleware, userController.create);

export default userRouter;