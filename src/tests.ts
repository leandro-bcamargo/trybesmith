// import { userModel } from "./models";
// import orderModel from "./models/order.model";
// import productModel from "./models/product.model";

import CustomError from "./utils/CustomError";

// async function testing() {
//   const test = await userModel.getByUsername("reigal")

//   console.log('testing:', test);
// }

// testing();

try {
  throw new CustomError('ERROR_STATUS', 'This is a custom error');
} catch (err) {
  if (err instanceof CustomError) {
    console.log('Caught a CustomError');
  } else {
    console.error(err)
    console.log('Caught a different type of error');
  }
}
