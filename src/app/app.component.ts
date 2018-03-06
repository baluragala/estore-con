import { Component, ViewEncapsulation } from "@angular/core";
import { ProductItem } from "./product/product.interface";

@Component({
  selector: "application-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = "angular";
  tagline = "Electronic store";
  numbers = [1, 2, 3, 4, 5];
  product1 = {
    title: "Iphone",
    price: 1500,
    stock: 20,
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

  headerOptions = {
    color: "red",
    background: "yellow"
  };

  getTitle() {
    return this.title;
  }

  handleClick(e) {
    console.log(e);
    alert("Clicked");
  }

  handleAddToCartEvent(item: ProductItem) {
    console.log(
      "AppComponent (parent) receieved event from ProductListItem(child)",
      item
    );
  }
}
