import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  title;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.params.pname;
    console.log(this.route.snapshot.queryParams);
  }
}
