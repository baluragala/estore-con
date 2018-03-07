import { Component, OnInit } from "@angular/core";
import { ProductItem } from "../product.interface";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: ProductItem[];

  constructor(private service: ProductService) {
    console.log(service);
  }

  ngOnInit() {
    //this.service = new ProductService();
    this.products = this.service.getProducts();
  }

  handleAddToCartEvent(item: ProductItem) {
    console.log(
      "ProductList (parent) receieved event from ProductListItem(child)",
      item
    );
  }
}
