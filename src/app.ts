import express from 'express';
import 'express-async-errors'
import errorMiddleware from './middlewares/errorMiddleware';
import productRouter from './routes/product.routes';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(errorMiddleware);

export default app;
