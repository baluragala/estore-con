import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

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

  @ViewChild("refdescription") refdescription;

  constructor() {}

  ngOnInit() {}

  handleInput(e) {
    console.log(e.target.value);
    this.title = e.target.value;
  }

  handleSubmit(f: NgForm) {
    //make api call
    console.log(this.title, this.description, this.price, this.stock);
    console.log(f.value);
  }
}
