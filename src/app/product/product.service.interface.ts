import { ProductItem } from "./product.interface";

export interface IProductService {
  getProducts: () => ProductItem[];
}
