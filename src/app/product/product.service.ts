import { Injectable } from "@angular/core";
import { ProductItem } from "./product.interface";
import { IProductService } from "./product.service.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ProductService implements IProductService {
  private dirtyForm: boolean = false;
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getProducts() {
    return this.http.get<ProductItem[]>("http://localhost:3000/products", {
      headers: { "X-App-Id": "1234" },
      params: { page: "1", limit: "10" }
    });
  }

  addProduct(product: ProductItem): Observable<ProductItem> {
    return this.http.post<ProductItem>(
      "http://localhost:3000/products",
      product
    );
  }

  getProduct(id: string): Observable<ProductItem> {
    return this.http.get<ProductItem>("http://localhost:3000/products/" + id);
  }

  setFormDirty(flag: boolean) {
    this.dirtyForm = flag;
  }
  isFormDirty() {
    return this.dirtyForm;
  }
}
