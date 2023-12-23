import express from 'express';
import 'express-async-errors'
import errorMiddleware from './middlewares/errorMiddleware';
import {orderRouter, productRouter, userRouter} from './routes/'

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);

app.use(errorMiddleware);

export default app;
