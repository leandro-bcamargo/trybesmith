import { Router } from "express";
import loginMiddleware from "../middlewares/login.middleware";
import { loginController } from "../controllers";

const loginRouter = Router()

loginRouter.post('/login', loginMiddleware, loginController.login);

export default loginRouter;