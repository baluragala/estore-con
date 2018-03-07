import { Injectable } from "@angular/core";
import { ProductItem } from "./product.interface";
import { IProductService } from "./product.service.interface";

@Injectable()
export class Productv2Service implements IProductService {
  product1 = {
    title: "Iphone2",
    price: 1500,
    stock: 2,
    description: "A phone by Apple"
  };
  product2 = {
    title: "Nexus2",
    price: 1500,
    stock: 0,
    description: "A phone by Apple"
  };
  product3 = {
    title: "Note2",
    price: 1500,
    stock: 20,
    description: "A phone by Apple"
  };
  product4 = {
    title: "Pixel2",
    price: 1500,
    stock: 20,
    description: "A phone by Apple"
  };

  products: ProductItem[] = [
    this.product1,
    this.product2,
    this.product3,
    this.product4
  ];
  constructor() {}

  getProducts() {
    return this.products;
  }
}
