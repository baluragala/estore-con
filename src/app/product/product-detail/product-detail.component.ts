import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  title;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(p => (this.title = p.get("pname")));
    this.route.queryParamMap.subscribe(p => console.log(p));
  }

  goToProducts() {
    this.router.navigate(["/detail", "Iphone"]);
  }
}
