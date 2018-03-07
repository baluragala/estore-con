import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-manage-product-reactive",
  templateUrl: "./manage-product-reactive.component.html",
  styleUrls: ["./manage-product-reactive.component.css"]
})
export class ManageProductReactiveComponent implements OnInit {
  productForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.productForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(120)
      ]),
      price: new FormControl(0, [Validators.min(0), Validators.max(9999)]),
      stock: new FormControl(1, [Validators.min(1), Validators.max(999)])
    });
  }
}
