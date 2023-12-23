import { Router } from 'express';
import productController from '../controllers/product.controller';
import createProductMiddleware from '../middlewares/createProduct.middleware';

const productRouter = Router();

productRouter.post('/products', createProductMiddleware, productController.create);
productRouter.get('/products', productController.getAll);

export default productRouter;