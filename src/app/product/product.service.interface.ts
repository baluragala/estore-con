import { ProductItem } from "./product.interface";
import { Observable } from "rxjs/Rx";

export interface IProductService {
  getProducts: () => Observable<ProductItem[]>;
  addProduct: (product: ProductItem) => Observable<ProductItem>;
}
