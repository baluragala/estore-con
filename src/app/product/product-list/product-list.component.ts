import { Component, OnInit } from "@angular/core";
import { ProductItem } from "../product.interface";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  product1 = {
    title: "Iphone",
    price: 1500,
    stock: 2,
    description: "A phone by Apple"
  };
  product2 = {
    title: "Nexus",
    price: 1500,
    stock: 0,
    description: "A phone by Apple"
  };
  product3 = {
    title: "Note",
    price: 1500,
    stock: 20,
    description: "A phone by Apple"
  };
  product4 = {
    title: "Pixel",
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

  ngOnInit() {}

  handleAddToCartEvent(item: ProductItem) {
    console.log(
      "ProductList (parent) receieved event from ProductListItem(child)",
      item
    );
  }
}
