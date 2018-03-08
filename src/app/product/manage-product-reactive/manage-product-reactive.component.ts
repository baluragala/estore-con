import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { StockPipe } from "../../shared/stock.pipe";
import { ProductService } from "../product.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-manage-product-reactive",
  templateUrl: "./manage-product-reactive.component.html",
  styleUrls: ["./manage-product-reactive.component.css"]
})
export class ManageProductReactiveComponent implements OnInit {
  productForm: FormGroup;
  isEdit: boolean = false;
  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

    this.productForm.valueChanges.subscribe(d =>
      this.service.setFormDirty(true)
    );

    if (this.route.snapshot.params["id"]) {
      this.service
        .getProduct(this.route.snapshot.params["id"])
        .subscribe(product => {
          this.productForm.patchValue({
            title: product.productName,
            description: product.InTheBox,
            price: product.price,
            stock: 1
          });
        });
    }
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
          this.service.setFormDirty(false);
        },
        err => alert("Something went wrong"),
        () => {
          this.router.navigate(["/products"]);
        }
      );
  }
}
