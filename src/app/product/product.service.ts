import { Injectable } from "@angular/core";
import { ProductItem } from "./product.interface";
import { IProductService } from "./product.service.interface";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService implements IProductService {
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getProducts() {
    return this.http.get<ProductItem[]>("http://localhost:3000/products");
  }
}
