import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-manage-product",
  templateUrl: "./manage-product.component.html",
  styleUrls: ["./manage-product.component.css"]
})
export class ManageProductComponent implements OnInit {
  title = "product1";
  description;
  price;
  stock;

  constructor() {}

  ngOnInit() {}

  handleInput(e) {
    console.log(e.target.value);
    this.title = e.target.value;
  }
}
