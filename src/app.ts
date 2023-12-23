import express from 'express';
import 'express-async-errors'
import errorMiddleware from './middlewares/error.middleware';
import { loginRouter, orderRouter, productRouter, userRouter } from './routes/'

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);
app.use(loginRouter);

app.use(errorMiddleware);

export default app;
