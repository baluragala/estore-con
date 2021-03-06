import { Component, OnInit, Inject } from "@angular/core";
import { ProductItem } from "../product.interface";
import { ProductService } from "../product.service";
import { Productv2Service } from "../productv2.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: ProductItem[];

  constructor(
    private service: ProductService,
    @Inject("CLIENT_ID") private apiKey: string
  ) {
    console.log(service, apiKey);
  }

  ngOnInit() {
    //this.service = new ProductService();
    this.service
      .getProducts()
      .subscribe(
        products => (this.products = products),
        err => alert("something went wrong")
      );
  }

  handleAddToCartEvent(item: ProductItem) {
    console.log(
      "ProductList (parent) receieved event from ProductListItem(child)",
      item
    );
  }
}
