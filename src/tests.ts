import productModel from "./models/product.model";

async function testing() {
  const test = await productModel.getAll()

  console.log('testing:', test);
}

testing();
