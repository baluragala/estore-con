import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { StockPipe } from "../../shared/stock.pipe";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-manage-product-reactive",
  templateUrl: "./manage-product-reactive.component.html",
  styleUrls: ["./manage-product-reactive.component.css"]
})
export class ManageProductReactiveComponent implements OnInit {
  productForm: FormGroup;
  constructor(private service: ProductService, private router: Router) {}

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

  load() {
    this.productForm.patchValue({
      title: "iphone",
      price: 1200,
      stock: 120
    });
  }

  handleSubmit() {
    this.service
      .addProduct({
        productName: this.productForm.value.title,
        InTheBox: this.productForm.value.description,
        price: this.productForm.value.price
      })
      .subscribe(
        p => {
          alert("Product Saved Successfully");
        },
        err => alert("Something went wrong"),
        () => {
          this.router.navigate(["/products"]);
        }
      );
  }
}
