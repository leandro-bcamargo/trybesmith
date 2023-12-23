import orderModel from "./models/order.model";
import productModel from "./models/product.model";

async function testing() {
  const test = await orderModel.getAll()

  console.log('testing:', test);
}

testing();
